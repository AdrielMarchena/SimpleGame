import { Animable,Animation } from "../../Animation/Animation";
import { KeyBoard } from '../../KeyBoard/KeyBoard';

export abstract class Entity implements Animable{

    protected _x:number;
    protected _y:number;
    protected _dx:number;
    protected _dy:number;
    protected _color:string;
    protected _keyboard:KeyBoard;
    protected _animation:Animation;
    protected _ctx:CanvasRenderingContext2D;

    /**
     * contructor for the class; 
     * x,y,dx,dy set to zero, 
     * color is 'black'
     * @param ctx the context where de Obj will be draw
     */
    constructor(ctx:CanvasRenderingContext2D){
        this._ctx = ctx;
        this._x = 0;
        this._y = 0;
        this._dx = 0;
        this._dy = 0;
        this._color = 'black';
    }

    public update():void{
        console.log('Override this method for Update your obj');
    }
    public draw():void{
        console.log('Override this method for Draw your obj');
    }
    //Get's & Set's
    public get x():number{
        return this._x;
    }
    public set x(x:number){
        this._x = x;
    }
    public get y():number{
        return this._y;
    }
    public set y(y:number){
        this._y = y;
    }
    public get dx():number{
        return this._dx;
    }
    public set dx(dx:number){
        this._dx = dx;
    }
    public get dy():number{
        return this._dy;
    }
    public set dy(dy:number){
        this._dy = dy;
    }
    public get color():string{
        return this._color;
    }
    public set color(color:string){
        this._color = color;
    }

}