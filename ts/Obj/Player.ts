import { Square } from "./Formats/Square";
import { Animation } from '../Animation/Animation';
import { Shot } from "./Shot";
import { KeyBoard } from "../KeyBoard/KeyBoard";

export class Player extends Square{

    public static readonly O_LEFT = 1;
    public static readonly O_RIGHT = 2;
    public static readonly O_UP = 3;
    public static readonly O_DOWN = 4;
    public orientation:number;
    //public soundShot:HTMLAudioElement;

    constructor(ctx:CanvasRenderingContext2D,keybord:KeyBoard,animation:Animation){
        super(ctx);
        this._keyboard = keybord;
        this._animation = animation;

        this.orientation = Player.O_RIGHT;
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

    private shoot():void{
        let shot = new Shot(this._ctx,this._animation);
        shot.x = this._x + this._width/2;
        shot.y = this._y + this.height/2;
        shot.radius = 2;
        shot.color = 'red';

        if(this.orientation == Player.O_LEFT) shot.dx = -20;
        else if(this.orientation == Player.O_RIGHT) shot.dx = 20;
        else if(this.orientation == Player.O_UP) shot.dy = -20;
        else if(this.orientation == Player.O_DOWN) shot.dy = 20;
        else throw new Error("The orientation to player obj do not exist");

        this._animation.addSprite(shot);
    }

    private checkInputs():void{
        // X movement  
        if(this._keyboard.pressKey(KeyBoard.ARROW_LEFT) && this._x > 0){
            this._x -= this._dx;
            this.orientation = Player.O_LEFT;
        }
        if(this._keyboard.pressKey(KeyBoard.ARROW_RIGHT)){
            if(this._x+this._width < this._ctx.canvas.width){
                this.x += this._dx;
                this.orientation = Player.O_RIGHT;
            }
        }
        // Y movement
        if(this._keyboard.pressKey(KeyBoard.ARROW_UP) && this._y > 0){
                this._y -= this._dy;   
                this.orientation = Player.O_UP;
        }
        if(this._keyboard.pressKey(KeyBoard.ARROW_DOWN)){
            if(this._y+this._height < this._ctx.canvas.height){
                this._y += this._dy;
                this.orientation = Player.O_DOWN;
            }
        }
        //Space bar interaction
        // Use Arrow function here, that way
        // no variable is needed to access the Player instance
        this._keyboard.clickedKey(KeyBoard.SPACE_BAR,()=>{
            this.shoot();
        });
    }

}