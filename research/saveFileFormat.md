# Save File Format

This file is documenting things not described in jdratlif's file, which is located here:

https://github.com/jdratlif/smse/blob/master/docs/sram-doc.txt

## Opening Header, 0x10 bytes

I created two save files, one with one game and one with two games. All games are at the very beginning of the game (fail to exit the space station).

### Single game save file header

`ddf0 ffff ffff ffff 220f ffff ffff ffff`

### Two game save file header

`ddf0 ddf0 ffff ffff 220f 220f ffff ffff`

## How to know how many games a save has

Just see if the first 6 words are `0xffff` or not. Beyond that, no idea yet what data is in this header.

Sometimes the dummy bytes seem to be `0x6060` instead.

# How energy is reported on the save file screen

It uses max energy to determine how many energy tanks to render, and current energy to render the actual current energy, with energy tanks empty as needed. There are seven energy tanks per row, starting from the bottom.
