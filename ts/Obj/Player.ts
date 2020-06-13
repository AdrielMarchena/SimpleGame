import { Square } from "./Formats/Square";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import { Animation } from '../Animation/Animation';
import { Shot } from "./Shot";

export class Player extends Square{

    public readonly O_LEFT = 1;
    public readonly O_RIGHT = 2;
    public readonly O_UP = 3;
    public readonly O_DOWN = 4;
    public orientation:number;
    //public soundShot:HTMLAudioElement;

    constructor(ctx:CanvasRenderingContext2D,keybord:KeyBoard,animation:Animation){
        super(ctx);
        this._keyboard = keybord;
        this._animation = animation;

        this.orientation = this.O_RIGHT;
        //this.soundShot = document.createElement('audio');
        //this.soundShot.src ="";
    }


    public update():void{
        this.checkInputs();
    }

    public draw():void{
        this._ctx.save();
        
        this._ctx.beginPath();
        this._ctx.rect(this._x,this._y,this._width,this._height);
        //this._ctx.strokeStyle = this._color;
        this._ctx.fillStyle = this._color;
        //this._ctx.stroke();
        this._ctx.fill();

        this._ctx.restore();
    }

    public shoot():void{
        let shot = new Shot(this._ctx,this._animation);
        shot.x = this._x + this._width/2;
        shot.y = this._y + this.height/2;
        shot.radius = 2;
        shot.color = 'red';

        if(this.orientation == this.O_LEFT) shot.dx = -20;
        else if(this.orientation == this.O_RIGHT) shot.dx = 20;
        else if(this.orientation == this.O_UP) shot.dy = -20;
        else if(this.orientation == this.O_DOWN) shot.dy = 20;
        else throw new Error("The orientation to player obj do not exist");

        this._animation.addSprite(shot);
    }

    checkInputs():void{
        // X movement  
        if(this._keyboard.pressKey(this._keyboard.ARROW_LEFT) && this._x > 0){
            this._x -= this._dx;
            this.orientation = this.O_LEFT;
        }
        if(this._keyboard.pressKey(this._keyboard.ARROW_RIGHT)){
            if(this._x+this._width < this._ctx.canvas.width){
                this.x += this._dx;
                this.orientation = this.O_RIGHT;
            }
        }
        // Y movement
        if(this._keyboard.pressKey(this._keyboard.ARROW_UP) && this._y > 0){
                this._y -= this._dy;   
                this.orientation = this.O_UP;
        }
        if(this._keyboard.pressKey(this._keyboard.ARROW_DOWN)){
            if(this._y+this._height < this._ctx.canvas.height){
                this._y += this._dy;
                this.orientation = this.O_DOWN;
            }
        }
        //Need this to access the player obj on the event
        let thisPlayer = this;
        //let thisShotSound = this.soundShot;
        
        //Space bar interaction
        this._keyboard.clickedKey(this._keyboard.SPACE_BAR,function(){
            thisPlayer.shoot();
        });
    }

}