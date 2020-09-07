import { KeyBoard } from "../KeyBoard/KeyBoard";
import { Entity } from "../Obj/Formats/Entity";
import { Colisions } from "../Colision/Colision"
export interface Animable{
    update():void;
    draw():void;
}

export class Animation{

    private _clearCanvas:boolean;
    private _sprites:Animable[];
    private _on:boolean;
    private _specialKeysOn:boolean;
    private _ctx:CanvasRenderingContext2D;
    private _keyboard:KeyBoard;
    //Array where the colisions will be in
    private _colisionArray:Colisions.Colision[];
    //Gravity
    public static readonly gravity:number = 1.6;

    constructor(sprite:Animable[],ctx:CanvasRenderingContext2D,keyboard:KeyBoard){
        this._sprites = sprite;
        this._ctx = ctx;
        this._ctx.canvas.style.cssText = "background-color: " + Entity.colorArray[4] + ";";
        this._clearCanvas = true;
        this._keyboard = keyboard;
        this.TurnSpecialKeysOn();
        this.turnOff();
        this._colisionArray = [];
    }
    
    public addSprite(sprite:Animable):void{
        this._sprites.push(sprite);
    }

    public popSprite(sprite:Animable):void{
        let ind = this._sprites.indexOf(sprite);
        this._sprites.splice(ind,1);
    }

    public nextFrame():void{
        //Check id need to run
        if( ! this._on ) return;
        //Clear the screen
        if(this._clearCanvas)
            this.clearScreen();

        //Update Sprites
        for (let i in this._sprites){
            this._sprites[i].update();
        }
        for(let i=0 ; i < this._colisionArray.length;i++)
            this._colisionArray[i].process();

        //Draw sprites
        for (let i in this._sprites)
            this._sprites[i].draw();
        
        if(this._specialKeysOn)
            this.specialKeys();
        
        //Call  next frame
        requestAnimationFrame(() => this.nextFrame());
    }

   private specialKeys():void{
        this._keyboard.clickedKey(KeyBoard.R_KEY,()=>{
            this.clearScreen();
        });
        
        this._keyboard.clickedKey(KeyBoard.P_KEY,()=>{
            if(this._clearCanvas)
                this.cleanOff();
        });
        
        this._keyboard.clickedKey(KeyBoard.O_KEY,()=>{
            if(!this._clearCanvas)
                this.cleanOn();
        });
    }

    public clearScreen():void{
        this._ctx.clearRect(0,0,
            this._ctx.canvas.width,
            this._ctx.canvas.height
            );
    }

    public pushColision(colid:Colisions.Colision){
        this._colisionArray.push(colid);
    }

    public cleanOn():void{
        this._clearCanvas = true;
    }
    public cleanOff():void{
        this._clearCanvas = false;
    }

    public turnOn():void{
        this._on = true;
        this.nextFrame();
    }
    public turnOff():void{
        this._on = false;
    }

    public get sprites():any[]{
        return this._sprites;
    }

    public TurnSpecialKeysOn():boolean{
        return this._specialKeysOn = true;
    }
    public TurnSpecialKeysOff(){
        this._specialKeysOn = false;
    }
}