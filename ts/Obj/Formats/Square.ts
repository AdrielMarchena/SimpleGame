import { Entity } from "./Entity";

export abstract class Square extends Entity{

    public width:number;
    public height:number;
    public maxWidth:number;
    public minWidth:number;
    public maxHeight:number;
    public minHeight:number;

    /**
     * contructor for the class; 
     * x,y,dx,dy set to zero, 
     * color is 'black'
     * @param ctx the context where de Obj will be draw
     */
    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
        this.width = 50;
        this.height = 50;
        this.maxHeight = 125;
        this.minHeight = 20;
        this.maxWidth = 125;
        this.minWidth = 20;
    }
}