import { Canvas } from './Canvas/Canvas';
import { Animation } from './Animation/Animation';
import { Ball } from './Obj/Formats/Ball';
import { randomMe } from './Utils/RandomMe';
import { Player } from './Obj/Player';
import { KeyBoard } from './KeyBoard/KeyBoard';

//Create a obj for canvas
let canvas:Canvas = new Canvas();
let keyboard:KeyBoard = new KeyBoard(document);

//Obj array to pass for the Animator
let objArray:any = [];

//Create a bunch of balls and put in objArray;
//createBalls();

//Create the Animation Obj
let animation = new Animation(objArray,canvas.ctx,keyboard);
canvas.resizeCanvas(window.innerWidth,window.innerHeight);
animation.addSprite(createSquare());
animation.turnOn();
animation.nextFrame();

window.addEventListener('resize',function(){
    canvas.resizeCanvas(window.innerWidth,window.innerHeight);
});

function createSquare():Player{
        let newSquare:Player = new Player(canvas.ctx,keyboard,animation);
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

function createBalls():void{
    for(let i=0;i<1;i++){
        let newBall:Ball = new Ball(canvas.ctx);
        newBall.radius = randomMe(15,35);
        newBall.x = randomMe(0+newBall.radius,canvas.canvas.width-newBall.radius*2);
        newBall.y = randomMe(0+newBall.radius,canvas.canvas.height-newBall.radius*2);
        newBall.dx = 10;
        newBall.dy = 10;
        //newBall.color = colorArray[Math.floor(randomMe(0,colorArray.length))];
        objArray.push(newBall);
    }
}