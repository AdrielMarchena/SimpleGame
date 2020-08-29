import { Canvas } from './Canvas/Canvas';
import { Animation, Animable } from './Animation/Animation';
import { Player } from './Obj/Player';
import { KeyBoard } from './KeyBoard/KeyBoard';
import { TextEntity } from './Obj/Text/TextEntity';
import { Entity } from './Obj/Formats/Entity';
import { ScoreText } from './Obj/Text/ScoreText';
import { Colisions } from "./Colision/Colision";

console.log("Some Special Keys:\n'P': disable the clean of canvas\n'O' enable the clean of canvas\n'R' clean the canvas once");
//Create a obj for canvas
const canvas:Canvas = new Canvas();
const keyboard:KeyBoard = new KeyBoard(document);
//Obj array to pass for the Animator
let objArray:any = [];
window.localStorage.setItem('playerScore','0');
//Create the Animation Obj
const animation = new Animation(objArray,canvas.ctx,keyboard);
//create a new PLayer
let player = createPlayer();
animation.addSprite(player);
//PAss some colision
let colision = new Colisions.Colision(Colisions.TypesOfColision.FIRST_TO_ALL);
colision.setMethodToColide(()=>{console.log("It Work")});
colision.addObjToColision(player);

//You can pass the weight and height that you want to resizeCanvas
//Pass nothing and the Default value is 600x600
canvas.resizeCanvas();
//Add sprites to render
animation.addSprite(createTextEntity());
animation.addSprite(createScoreText());
//Says that the loop can go on
animation.turnOn();
//init the loop
animation.nextFrame();

animation.pushColision(colision);

//Function to create an ScoreText, the number after the 'SCORE: ' Text 
function createScoreText():ScoreText{
    const text:ScoreText = new ScoreText(canvas.ctx);
    text.x = 130;
    text.y = 30;
    text.color = 'white';
    text.sSize = '30px';
    text.sFont ='Comic Sans MS';
    text.text = "0";
    return text;
}

//Function to create an Text Entity, That's the 'SCORE: ' on screen
function createTextEntity():TextEntity{
    const text:TextEntity = new TextEntity(canvas.ctx);
    text.x = 20;
    text.y = 30;
    text.color = 'white';
    text.sSize = '30px';
    text.sFont ='Comic Sans MS';
    text.text = "SCORE: ";
    return text;
}
//Function to create the Player obj
function createPlayer():Player{
        const newSquare:Player = new Player(canvas.ctx,keyboard,animation);
        newSquare.color = Entity.colorArray[3];
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