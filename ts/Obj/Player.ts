import { Square } from "./Formats/Square";
import { Animation } from '../Animation/Animation';
import { Shot } from "./Shot";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import { Colisions } from "../Colision/Colision";

export class Player extends Square implements Colisions.colisibleObj{

    public static readonly O_LEFT = 1;
    public static readonly O_RIGHT = 2;
    public static readonly O_UP = 3;
    public static readonly O_DOWN = 4;
    public orientation:number;
    public score:number;
    //public soundShot:HTMLAudioElement;

    constructor(ctx:CanvasRenderingContext2D,keybord:KeyBoard,animation:Animation){
        super(ctx);
        this._keyboard = keybord;
        this._animation = animation;
        
        const pl = window.localStorage.getItem('playerScore');
        if(!pl)
            this.score = 0;
        else
            this.score = parseInt(pl);
        this.orientation = Player.O_RIGHT;
    }

    public update():void{
        this.checkInputs();
    }

    public draw():void{
        this._ctx.save();
        this._ctx.globalCompositeOperation = 'destination-over';
        this._ctx.beginPath();
        this._ctx.rect(this.x,this.y,this.width,this.height);
        //this._ctx.strokeStyle = this._color;
        this._ctx.fillStyle = this.color;
        //this._ctx.stroke();
        this._ctx.fill();

        this._ctx.restore();
    }

    getUtilInfo():Colisions.UtilInfo{
        return new Colisions.UtilInfo(this.x,this.y,this.height,this.width,Colisions.TypesOnColision.PLAYER);
    }

    public callBackMessageFunc(cause:Colisions.colisibleObj,colisionInstance?:Colisions.Colision){
        if(cause.getUtilInfo().type === Colisions.TypesOnColision.ENEMY){
            console.log("Tell my mom i love her");
            colisionInstance.popColision(this);
            this._animation.popSprite(this);

        }

    }

    private shoot():void{
        const shot = new Shot(this._ctx,this._animation);
        shot.x = this.x + this.width/2;
        shot.y = this.y + this.height/2;
        shot.radius = 2;
        shot.color = 'red';//Animation.colorArray[1];

        if(this.orientation == Player.O_LEFT) shot.dx = -20;
        else if(this.orientation == Player.O_RIGHT) shot.dx = 20;
        else if(this.orientation == Player.O_UP) shot.dy = -20;
        else if(this.orientation == Player.O_DOWN) shot.dy = 20;
        else throw new Error("The orientation to player obj do not exist");

        this._animation.addSprite(shot);
        this.score++;
        window.localStorage.setItem('playerScore',this.score.toString());
    }

    private checkInputs():void{
        // X movement  
        if(this._keyboard.pressKey(KeyBoard.ARROW_LEFT) && this.x > 0){
            this.x -= this.dx;
            this.orientation = Player.O_LEFT;
        }
        if(this._keyboard.pressKey(KeyBoard.ARROW_RIGHT)){
            if(this.x+this.width < this._ctx.canvas.width){
                this.x += this.dx;
                this.orientation = Player.O_RIGHT;
            }
        }
        // Y movement
        if(this._keyboard.pressKey(KeyBoard.ARROW_UP) && this.y > 0){
                this.y -= this.dy;   
                this.orientation = Player.O_UP;
        }
        if(this._keyboard.pressKey(KeyBoard.ARROW_DOWN)){
            if(this.y+this.height < this._ctx.canvas.height){
                this.y += this.dy;
                this.orientation = Player.O_DOWN;
            }
        }

        this._keyboard.clickedKey(KeyBoard.SPACE_BAR,()=>{
            this.shoot();
        });
    }

}