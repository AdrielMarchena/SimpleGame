import { KeyBoard } from "../KeyBoard/KeyBoard";

export interface Animable{

    update():void;
    draw():void;
}

export class Animation{

    private _clearCanvas:boolean;
    private _sprites: any[];
    private _on:boolean;
    private _ctx:CanvasRenderingContext2D;
    private _keyboard:KeyBoard;
    private _specialKeysOn:boolean;

    constructor(sprite:any[],ctx:CanvasRenderingContext2D,keyboard:KeyBoard){
        this._sprites = sprite;
        this._ctx = ctx;
        this._ctx.canvas.style.cssText = "background-color: aqua;";
        this._clearCanvas = true;
        this._keyboard = keyboard;
        this._specialKeysOn = true;
    }
    
    public addSprite(sprite:Animable):void{
        this._sprites.push(sprite);
    }

    public popSprite(sprite:Animable):void{
        let ind = this._sprites.indexOf(sprite);
        this._sprites.splice(ind,1);
    }

    public nextFrame():void{
        //Check if this is to be running
        if( ! this._on ) return;

        //Clear the screen
        if(this._clearCanvas)
            this.clearScreen();

        //Update Sprites
        for (let i in this._sprites){
            this._sprites[i].update();
        }

        //Draw sprites
        for (let i in this._sprites){
            this._sprites[i].draw();
        }
        
        if(this._specialKeysOn)
            this.specialKeys();

        //Call  next frame
        requestAnimationFrame(() => this.nextFrame());
    }

    specialKeys():void{
        let thisAnimation = this;
        this._keyboard.clickedKey(this._keyboard.R_KEY,function(){
            thisAnimation.clearScreen();
        });
           
        if(this._keyboard.pressKey(this._keyboard.P_KEY)){
            if(this._clearCanvas)
                this.cleanOff();
        }
        if(this._keyboard.pressKey(this._keyboard.O_KEY)){
            if(!this._clearCanvas)
                this.cleanOn();
        }
    }

    public clearScreen():void{
        this._ctx.clearRect(0,0,
            this._ctx.canvas.width,
            this._ctx.canvas.height
            );
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

    public get specialKeysOn():boolean{
        return this._specialKeysOn;
    }
    public set specialKeysOn(on:boolean){
        this._specialKeysOn = on;
    }
}