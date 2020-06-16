
export class KeyBoard{
    //keys
    public static readonly SPACE_BAR:number = 32;
    public static readonly ARROW_LEFT:number = 37;
    public static readonly ARROW_UP:number = 38;
    public static readonly ARROW_RIGHT:number = 39;
    public static readonly ARROW_DOWN:number = 40;
    public static readonly G_KEY:number = 71;
    public static readonly O_KEY:number = 79;
    public static readonly P_KEY:number = 80;
    public static readonly R_KEY:number = 82;
    public static readonly PLUS_NUMKEY:number = 107;
    public static readonly MINUS_NUMKEY:number = 109;
    
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

    /**
     * Use for continues press od a key
     * @param key The actual key, use static attribute of this class to get them
     */
    public pressKey(key:number):boolean{
        return this._pressKeys[key];
    }
    /**
     * Use if you just want one click of the key
     * @param key The actual key, use static attribute of this class to get them
     * @param callback The function that will be executed when the key be pressed
     */
    public clickedKey(key:number,callback:Function):void{
        this._clickFunction[key] = callback;
    }
}