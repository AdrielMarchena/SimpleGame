import { Entity } from './Entity';
/**
 * Class to represent a Ball
 * 
 */
export class Ball extends Entity{

    protected _radius:number;
    /**
     * contructor for the class ball; x,y,dx,dy set to zero, 
     * radius set to 10, color is 'black'
     * @param ctx the context where de ball will be draw
     */
    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
        this._x = 0;
        this._y = 0;
        this._dx = 0;
        this._dy = 0;
        this._radius = 10;
        this._color = 'black';
    }

    public update():void{
        console.log("Override this method to update");
    }
    public draw():void{
        console.log("Override this method to update");
    }
    //Get's & Set's
    
    public get radius():number{
        return this._radius;
    }
    public set radius(radius:number){
        this._radius = radius;
    }
}