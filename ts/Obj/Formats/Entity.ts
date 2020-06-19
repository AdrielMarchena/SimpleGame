import { Animable,Animation } from "../../Animation/Animation";
import { KeyBoard } from '../../KeyBoard/KeyBoard';

export abstract class Entity implements Animable{

    public static readonly colorArray = [
        '#3803FA',
        '#2A00D7',
        '#7345FF',
        '#11054E',
        '#6B3DFF'
    ];

    public x:number;
    public y:number;
    public dx:number;
    public dy:number;
    public color:string;
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
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.color = 'black';
    }

    public update():void{}
    public draw():void{}
    
}