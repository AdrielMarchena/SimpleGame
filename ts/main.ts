import { Canvas } from './Canvas/Canvas';
import { Animation } from './Animation/Animation';
import { randomMe } from './Utils/RandomMe'
import { Player } from './Obj/Player';
import { KeyBoard } from './KeyBoard/KeyBoard';

//Create a obj for canvas
const canvas:Canvas = new Canvas();
const keyboard:KeyBoard = new KeyBoard(document);

//Obj array to pass for the Animator
let objArray:any = [];

//Create the Animation Obj
const animation = new Animation(objArray,canvas.ctx,keyboard);
canvas.resizeCanvas();
animation.addSprite(createSquare());
animation.turnOn();
console.log("Some Special Keys:\n'P': disable the clean of canvas\n'O' enable the clean of canvas\n'R' clean the canvas once");
animation.nextFrame();

//Discoment this to resize the canvas for full 
//every time the window of browser resize
/*
window.addEventListener('resize',function(){
    canvas.resizeCanvas(window.innerWidth,window.innerHeight);
});*/

function createSquare():Player{
        const newSquare:Player = new Player(canvas.ctx,keyboard,animation);
        newSquare.color = 'black';
        newSquare.x = canvas.canvas.width/2;
        newSquare.y = canvas.canvas.height/2;
        newSquare.width = 50;
        newSquare.height = 75;
        newSquare.minWidth = 20;
        newSquare.maxWidth = 125;
        newSquare.minHeight = 50;
        newSquare.maxHeight = 150;
        newSquare.dx = 10;
        newSquare.dy = 10;
    return newSquare;
}