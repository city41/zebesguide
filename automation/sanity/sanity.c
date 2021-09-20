// copied from https://github.com/jdratlif/smse/blob/master/docs/sram-doc.txt

#include <stdio.h>

void sanitize(char *sram) {
    int game, i;
    short high, low;
    unsigned char value;
    unsigned char hb, lb, hc, lc;
    char *ptr;
    
    for (game = 0; game < 3; ++game) {
        ptr = (sram + 0x10 + (0x65C * game));
        high = 0;
        low = 0;
        
        for (i = 0; i < 0x65C; ++i) {
            value = ptr[i];
            
            if ((high += value) > 0xFF) {
                high &= 0xFF;
                ++low;
            }
            
            value = ptr[++i];
            
            if ((low += value) > 0xFF) {
                low &= 0xFF;
            }
        }
        
        hb = (unsigned char)high;
        lb = (unsigned char)low;
        hc = (hb ^ 0xFF);
        lc = (lb ^ 0xFF);
        
        sram[game * 2] = hb;
        sram[game * 2 + 1] = lb;
        
        sram[8 + game * 2] = hc;
        sram[8 + game * 2 + 1] = lc;
        
        sram[0x1FF0 + game * 2] = hb;
        sram[0x1FF0 + game * 2 + 1] = lb;
        
        sram[0x1FF8 + game * 2] = hc;
        sram[0x1FF8 + game * 2 + 1] = lc;
    }
}

int main(int argc, char **argv) {
    FILE *f;
    char sram[0x2000];
    
    if (argc != 2) {
        fprintf(stderr, "syntax: sanity [Super Metroid SRAM File]\n");
        
        return -1;
    }
    
    if ((f = fopen(argv[1], "rb")) == NULL) {
        fprintf(stderr,
            "error: unable to open Super Metroid SRAM file for reading\n");
        
        return -1;
    }
    
    if (fread(sram, 0x2000, 1, f) != 1) {
        fprintf(stderr, "error: invalid SRAM file\n");
        
        return -1;
    }
    
    fclose(f);
    
    sanitize(sram);
    
    if ((f = fopen(argv[1], "wb")) == NULL) {
        fprintf(stderr,
            "error: unable to open Super Metroid SRAM file for writing\n");
        
        return -1;
    }
    
    if (fwrite(sram, 0x2000, 1, f) != 1) {
        fprintf(stderr, "error: unable to write SRAM data\n");
        
        return -1;
    }
    
    fclose(f);
    
    printf("successfully fixed sanity data in file: [%s]\n", argv[1]);
    
    return 0;
}