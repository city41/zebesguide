-- this script requires the bsnes115 core
require("getBitByte")

local SRAM_BASE = 0x700000
local SRAM_OFFSET = 0x10
local SRAM_SAVE_SIZE = 0x65c

local CRATERIA = 0
local BRINSTAR = 1
local NORFAIR = 2
local WRECKED_SHIP = 3
local MARIDIA = 4
local TOURIAN = 5

local CURRENT_SAVE_AREA = NORFAIR
local CURRENT_SAVE_POINT = 1

-- these are using the start of the save as zero, to match the sram-doc
-- so to use these, usually need to do SRAM_BASE + SRAM_OFFSET + <value>
local SAVE_AREA = 0x158
local SAVE_POINT = 0x156
local START_OF_MAP_OFFSET = 0x15a
local END_OF_MAP_OFFSET = SRAM_SAVE_SIZE

memory.usememorydomain("System Bus")

local function has_value(tab, val)
	for index, value in ipairs(tab) do
		if value == val then
			return true
		end
	end

	return false
end

-- ported from
-- https://github.com/jdratlif/smse/blob/master/docs/sram-doc.txt#L813
local function sanitize()
	local ptr = SRAM_BASE + SRAM_OFFSET
	local high = 0
	local low = 0

	for i = 0, SRAM_SAVE_SIZE, 2 do
		value = memory.readbyte(ptr + i)

		high = high + value

		if high > 0xff then
			high = high & 0xff
			low = low + 1
		end

		value = memory.readbyte(ptr + i + 1)

		low = low + value

		if low > 0xff then
			low = low & 0xff
		end
	end

	hb = high & 0xff
	lb = low & 0xff

	hc = hb ~ 0xff
	lc = lb ~ 0xff

	memory.writebyte(SRAM_BASE + 0, hb)
	memory.writebyte(SRAM_BASE + 1, lb)
	memory.writebyte(SRAM_BASE + 8, hc)
	memory.writebyte(SRAM_BASE + 9, lc)
	memory.writebyte(SRAM_BASE + 0x1ff0, hb)
	memory.writebyte(SRAM_BASE + 0x1ff1, lb)
	memory.writebyte(SRAM_BASE + 0x1ff8, hc)
	memory.writebyte(SRAM_BASE + 0x1ff9, lc)
end

local bitByte = {}
bitByte.bitIndex = 0
bitByte.byteIndex = tonumber(os.getenv("LUA_BYTE_INDEX"))

local screenshotcount = 0

local function patch_sram()
	-- set the save location
	memory.writebyte(SRAM_BASE + SRAM_OFFSET + SAVE_AREA, CURRENT_SAVE_AREA)
	memory.writebyte(SRAM_BASE + SRAM_OFFSET + SAVE_POINT, CURRENT_SAVE_POINT)

	-- set the current map bit we are dumping
	for i = START_OF_MAP_OFFSET, END_OF_MAP_OFFSET, 1 do
		local byteToWrite = 0
		if (i - START_OF_MAP_OFFSET) == bitByte.byteIndex then
			byteToWrite = 1 << bitByte.bitIndex
		end

		memory.writebyte(SRAM_BASE + SRAM_OFFSET + i, byteToWrite)
	end

	sanitize()
end

local start_down = {}
start_down["P1 Start"] = true

client.reboot_core()

while true do
	print("about to play movie")
	movie.play_from_start("/home/matt/dev/zebesguide/automation/lua/norfair.bk2")
	print("movie call returned")
	print("patching sram")
	patch_sram()

	for i = 1, movie.length() do
		emu.frameadvance()
	end

	print("movie is done")

	client.screenshot("screenshot_" .. bitByte.byteIndex .. "_" .. bitByte.bitIndex .. ".png")
	screenshotcount = screenshotcount + 1

	bitByte = getBitByte(bitByte)

	if bitByte.byteIndex >= (END_OF_MAP_OFFSET - START_OF_MAP_OFFSET) or screenshotcount >= 64 then
		client.exit()
	end
end
