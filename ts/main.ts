import { Canvas } from './Canvas/Canvas';
import { Animation } from './Animation/Animation';
import { Player } from './Obj/Player';
import { KeyBoard } from './KeyBoard/KeyBoard';
import { TextEntity } from './Obj/Text/Text';

//Create a obj for canvas
const canvas:Canvas = new Canvas();
const keyboard:KeyBoard = new KeyBoard(document);
//Obj array to pass for the Animator
let objArray:any = [];
window.localStorage.setItem('playerScore','0');
//Create the Animation Obj
const animation = new Animation(objArray,canvas.ctx,keyboard);
//You can pass the weight and height that you want to resizeCanvas
//Pass nothing and the Default value is 600x600
canvas.resizeCanvas();
animation.addSprite(createTextEntity());
animation.addSprite(createPlayer());
animation.turnOn();
console.log("Some Special Keys:\n'P': disable the clean of canvas\n'O' enable the clean of canvas\n'R' clean the canvas once");
animation.nextFrame();

//Discoment this to resize the canvas for full 
//every time the window of browser resize
/*
window.addEventListener('resize',function(){
    canvas.resizeCanvas(window.innerWidth,window.innerHeight);
});*/

function createTextEntity():TextEntity{
    const text:TextEntity = new TextEntity(canvas.ctx);
    text.x = 20;
    text.y = 30;
    text.color = Animation.colorArray[3];
    text.sSize = '30px';
    text.sFont ='Comic Sans MS';
    text.sText = "SCORE: ";
    return text;
}

function createPlayer():Player{
        const newSquare:Player = new Player(canvas.ctx,keyboard,animation);
        newSquare.color = Animation.colorArray[3];
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