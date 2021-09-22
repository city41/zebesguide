-- this script requires either the bsnes or bsnes115 core
-- in my experience, the bsnes core is much faster and prefered


-- bsnes 115
-- "0": "CARTRIDGE_RAM"
-- "1": "WRAM"
-- "2": "APURAM"
-- "3": "VRAM"
-- "4": "CGRAM"
-- "5": "CARTRIDGE_ROM"
-- "6": "System Bus"
-- "7": "Waterbox PageData"

--  $700000-$707FFF, $710000-$717FFF, $720000-$727FFF and $730000-$737FFF


local SRAM_BASE = 0x700000;
local SRAM_OFFSET = 0x10;
local SRAM_SAVE_SIZE = 0x65c;

local CRATERIA = 0;
local WRECKED_SHIP = 3;

-- these are using the start of the save as zero, to match the sram-doc
-- so to use these, usually need to do SRAM_BASE + SRAM_OFFSET + <value>
local SAVE_AREA = 0x158;
local SAVE_POINT = 0x156;
local START_OF_MAP_OFFSET = 0x15a;
local END_OF_MAP_OFFSET = SRAM_SAVE_SIZE;


memory.usememorydomain("System Bus");

local function has_value (tab, val)
    for index, value in ipairs(tab) do
        if value == val then
            return true;
        end
    end

    return false;
end

-- ported from
-- https://github.com/jdratlif/smse/blob/master/docs/sram-doc.txt#L813
local function sanitize()
	local ptr = SRAM_BASE + SRAM_OFFSET;
	local high = 0;
	local low = 0;
	
	for i = 0, SRAM_SAVE_SIZE, 2 do
		value = memory.readbyte(ptr + i)
		
		high = high + value
		
		if high > 0xff then
			high = bit.band(high, 0xff);
			low = low + 1;
		end
		
		value = memory.readbyte(ptr + i + 1)
		
		low = low + value;
		
		if low > 0xff then
			low = bit.band(low, 0xff);
		end
	end
		
	hb = bit.band(high, 0xff);
	lb = bit.band(low, 0xff);
	
	hc = bit.bxor(hb, 0xff);
	lc = bit.bxor(lb, 0xff);
	
	memory.writebyte(SRAM_BASE + 0, hb);
	memory.writebyte(SRAM_BASE + 1, lb);
	memory.writebyte(SRAM_BASE + 8, hc);
	memory.writebyte(SRAM_BASE + 9, lc);
	memory.writebyte(SRAM_BASE + 0x1ff0, hb);
	memory.writebyte(SRAM_BASE + 0x1ff1, lb);
	memory.writebyte(SRAM_BASE + 0x1ff8, hc);
	memory.writebyte(SRAM_BASE + 0x1ff9, lc);
end

local bitIndex = 0
local byteIndex = 0

local function patch_sram()
	-- set the save location
	memory.writebyte(SRAM_BASE + SRAM_OFFSET + SAVE_AREA, CRATERIA);
	memory.writebyte(SRAM_BASE + SRAM_OFFSET + SAVE_POINT, 0);
	
	for i = START_OF_MAP_OFFSET, END_OF_MAP_OFFSET, 1 do
		byteToWrite = 0;
		if (i - START_OF_MAP_OFFSET) == byteIndex then
			byteToWrite = bit.lshift(1, bitIndex);
		end
		
		memory.writebyte(SRAM_BASE + SRAM_OFFSET + i, byteToWrite);
	end
	
	sanitize();
end

local myinput = {};
myinput['P1 Start'] = true;

--local frames = { 300, 400, 500, 600, 800, 900 };
--local SCREENSHOT_FRAME = 980;

local frames = { 300, 380, 420, 520, 720, 820 };
local SCREENSHOT_FRAME = 900;


while true do
	if emu.framecount() == 20 then
		patch_sram()
	end
	
	if has_value(frames, emu.framecount()) then
		joypad.set(myinput);
	else
		joypad.set({});
	end
	
	if emu.framecount() == SCREENSHOT_FRAME then
		client.screenshot('screenshot_' .. byteIndex .. '_' .. bitIndex .. '.png');
		
		bitIndex = bitIndex + 1
		
		if bitIndex == 8 then
			bitIndex = 0
			byteIndex = byteIndex + 1;
		end
		
		if byteIndex < END_OF_MAP_OFFSET then
			client.reboot_core();
		else
			client.exit();
		end
	end
	
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
	emu.frameadvance();
end