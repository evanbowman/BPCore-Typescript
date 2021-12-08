/** @noSelfInFile */


declare function btn(num: number): void;
declare function btnp(num: number): void;
declare function btnnp(num: number): void;


declare function print(message: string,
                       x: number,
                       y: number,
                       foreground_color_hex?: number,
                       background_color_hex?: number): void;

declare function txtr(layer: number, filename: string): void;

declare function spr(index: number,
                     x: number,
                     y: number,
                     xflip?: boolean,
                     yflip?: boolean): void;

declare function tile(layer: number,
                      x: number,
                      y: number,
                      tile_num?: number): any;

declare function tilemap(filename: string,
                         layer: number,
                         width: number,
                         height: number,
                         dest_x?: number,
                         dest_y?: number,
                         src_x?: number,
                         src_y?: number): void;

declare function fade(amount: number,
                      custom_color_hex: number,
                      include_sprites?: boolean,
                      include_overlay?: boolean): void;

declare function camera(x: number, y: number): void;

declare function scroll(layer: number, x_amount: number, y_amount: number): void;

declare function priority(sprite_pr: number,
                          background_pr: number,
                          tile0_pr: number,
                          tile1_pr: number): void;

declare function clear(): void;

declare function display(): void;


declare function poke(address: number, b: number): void;

declare function poke4(address: number, w: number): void;

declare function peek(address: number): number;

declare function peek4(address: number): number;

declare function memput(address: number, value: string): void;

declare function memget(address: number, nbytes: number): string;


declare function music(source_file: string, offset: number): void;

declare function sound(source_file: string, priority: number): void;


declare function next_script(name: string): void;


declare const _SRAM: number;
declare const _IRAM: number;
declare const _BP_VERSION: string;



