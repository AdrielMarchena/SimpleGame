import { Canvas } from './Canvas/Canvas';
import { Animation } from './Animation/Animation';
import { Player } from './Obj/Player';
import { Enemy } from './Obj/Enemy';
import { Ground } from './Obj/Ground';
import { KeyBoard } from './KeyBoard/KeyBoard';
import { TextEntity } from './Obj/Text/TextEntity';
import { Entity } from './Obj/Formats/Entity';
import { ScoreText } from './Obj/Text/ScoreText';
import { Colisions } from "./Colision/Colision";

console.log("Special Keys:\n'P': disable the clean of canvas\n'O' enable the clean of canvas\n'R' clean the canvas once");
//Create a obj for canvas
const canvas:Canvas = new Canvas();

//Pass nothing and the Default value is 600x600
canvas.resizeCanvas();
//Create a KeyBoard Obj
const keyboard:KeyBoard = new KeyBoard(document);
//Obj array to pass for the Animator
window.localStorage.setItem('playerScore','0');
//Create the Animation Obj
const animation = new Animation([],canvas.ctx,keyboard);
//create a new PLayer and add to the animation
const player = createPlayer();
animation.addSprite(player);
//const ground = createGround();
//animation.addSprite(ground);
const enemy = createEnemy();
animation.addSprite(enemy);
//Create a colision
const colision = new Colisions.Colision(Colisions.TypesOfColision.FIRST_TO_ALL);
colision.setMethodToColide((obj:Colisions.colisibleObj,cause:Colisions.colisibleObj)=>{
    const tempObj = obj.getUtilInfo();
    const tempCause = cause.getUtilInfo();
    if ((tempObj.x + tempObj.w) > tempCause.x &&
    tempObj.x < (tempCause.x + tempCause.w) &&
        (tempObj.y + tempObj.h) > tempCause.y &&
        tempObj.y < (tempCause.y + tempCause.h))
            return true;
    return false;
});
colision.addObjToColision(player);
//colision.addObjToColision(ground);
colision.addObjToColision(enemy);
//Add one colision to the animation
animation.pushColision(colision);

//Add sprites to render
animation.addSprite(createTextEntity());
animation.addSprite(createScoreText());
//The loop can continues
animation.turnOn();
//init the loop
animation.nextFrame();

/*  Some functions  */

function createGround():Ground{
    const tempGround = new Ground(canvas.ctx);
    tempGround.x = canvas.canvas.width/2;
    tempGround.y = canvas.canvas.height/2;
    tempGround.width = 50;
    tempGround.height = 50;
    tempGround.color = 'black';
    return tempGround;
}

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

function createEnemy():Enemy{
    const tempEnemy:Enemy = new Enemy(canvas.ctx,keyboard,animation);

        tempEnemy.width = 50;
        tempEnemy.height = 75;
        tempEnemy.x = canvas.canvas.width - tempEnemy.width;
        tempEnemy.y = canvas.canvas.height/2;
        tempEnemy.minWidth = 20;
        tempEnemy.maxWidth = 125;
        tempEnemy.minHeight = 50;
        tempEnemy.maxHeight = 150;
        tempEnemy.dx = 10;
        tempEnemy.dy = 10;
        tempEnemy.color = 'white';
    return tempEnemy;
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