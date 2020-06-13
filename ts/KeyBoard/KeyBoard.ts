export class KeyBoard{
    
    //keys
    public readonly SPACE_BAR:number = 32;
    public readonly ARROW_LEFT:number = 37;
    public readonly ARROW_UP:number = 38;
    public readonly ARROW_RIGHT:number = 39;
    public readonly ARROW_DOWN:number = 40;
    public readonly G_KEY = 71;
    public readonly O_KEY = 79;
    public readonly P_KEY = 80;
    public readonly R_KEY:number = 82;
    public readonly PLUS_NUMKEY:number = 107;
    public readonly MINUS_NUMKEY:number = 109;
    
    //private _element:Document;
    private _pressKeys:boolean[];
    private _clicked:boolean[];
    private _clickFunction:Function[];

    constructor(element:Document){
        this._pressKeys = [];
        this._clicked = [];
        this._clickFunction = [];
        
        let keyboard = this;
        element.addEventListener('keydown',function(event:any){
            let key = event.keyCode;
            keyboard._pressKeys[key] = true;

            if(keyboard._clickFunction[key] && 
                !keyboard._clicked[key]){
                
                keyboard._clicked[key] = true;
                keyboard._clickFunction[key] ();
                //console.log(key);
            }
        });

        element.addEventListener('keyup', function(event:any){
            keyboard._pressKeys[event.keyCode] = false;
            keyboard._clicked[event.keyCode] = false;
        })
    }

    public pressKey(key:number):boolean{
        return this._pressKeys[key];
    }
    public clickedKey(key:number,callback:Function):void{
        this._clickFunction[key] = callback;
    }
}