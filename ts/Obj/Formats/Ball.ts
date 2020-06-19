import { Entity } from './Entity';
/**
 * Class to represent a Ball
 * 
 */
export abstract class Ball extends Entity{

    public radius:number;
    /**
     * contructor for the class ball; x,y,dx,dy set to zero, 
     * radius set to 10, color is 'black'
     * @param ctx the context where de ball will be draw
     */
    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
        this.x = 0;
        this.y = 0;
        this.dx = 0;
        this.dy = 0;
        this.radius = 10;
        this.color = 'black';
    } 
}