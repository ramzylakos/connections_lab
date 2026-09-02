
//SVG Export
p5.disableFriendlyErrors = true;
let bDoExportSvg = false; 


let angle = 0;
let axiom = "F";
let sentence = "FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]FFF+[+F-F-F]-[-F+F+F]F+[+FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F-FF+[+F-F-F]-[-F+F+F]F]-[-FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F+FF+[+F-F-F]-[-F+F+F]F]FF+[+F-F-F]-[-F+F+F]F";
let len = 5;
let scaleFactor = 1.36;

let rules = [];

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]F",
}



function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

// function mousePressed(){
//   generate();
// }
// //Generates the sentence

function generate() {
  len *= 0.6; // line length
 // angle = HALF_PI;
  let nextSentence = ""; //creates a new sentence
  for (let i = 0; i < sentence.length; i++) { // parses the old sentence character by character
    let current = sentence.charAt(i); // stores each character in the current variable
    let found = false;
    for (let j = 0; j < rules.length; j++) { // goes through each rule set 
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break; // terminates current loop because a replacement was found
      }
    }
    if (!found) { // leaves like + - [ ] in the code bc there is no replacement rule
      nextSentence += current; // adds symbol to the current sentence 
    }
  }
  sentence = nextSentence; // make sentence equal to the next sentence that was being developed above
//   createP(sentence); //print the sentence below
  turtle(); //calls the turtle (drawing) function

}

function turtle() {
  background(255);
  resetMatrix();
  translate(width / 2, height);
  stroke(0);
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    } else if (current == ">") {
      len *= 1.36;
    } else if (current == "<") {
      len /= 1.36;
    }else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function draw() {
  // exports current sketch as an SVG
  if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }
  turtle(); //runs turtle in draw so it can save the SVG
  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
    angleMode(DEGREES);
    angle = map(mouseX, 0, width, 0, 90)
  // angle = 4
  len = 3;
  console.log(angle);

}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  background(255);
  turtle();
}
