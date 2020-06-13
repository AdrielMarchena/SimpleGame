import { Renderizable } from "./Renderizable";
import { KeyBoard } from "../../KeyBoard/KeyBoard";
import { Ball } from "./Ball";
import { Animation } from "../../Animation/Animation";

let colorArray = [         /*Some color for the balls */
    '#0A1747',
    '#0029FA',
    '#8D07F6',
    '#FFFF05',
    '#D4DBF5',
];

export class Square extends Renderizable{

    protected _width:number;
    protected _height:number;
    protected _maxWidth:number;
    protected _minWidth:number;
    protected _maxHeight:number;
    protected _minHeight:number;

    /**
     * contructor for the class; 
     * x,y,dx,dy set to zero, 
     * color is 'black'
     * @param ctx the context where de Obj will be draw
     */
    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
        this._width = 50;
        this._height = 50;
        this._maxHeight = 125;
        this._minHeight = 20;
        this._maxWidth = 125;
        this._minWidth = 20;
    }

    public update():void{
        console.log('Override this method to implement update');
    }
    public draw():void{
        console.log('Override this method to implement draw');
    }


public get width():number{
    return this._width;
}
public set width(width:number){
    this._width = width;
}

public get height():number{
    return this._height;
}
public set height(height:number){
    this._height = height;
}

public get maxHeight():number{
    return this._maxHeight;
}
public set maxHeight(maxHeight:number){
    this._maxHeight = maxHeight;
}

public get minHeight():number{
    return this._minHeight;
}
public set minHeight(minHeight:number){
    this._minHeight = minHeight;
}

public get maxWidth():number{
    return this._maxWidth;
}
public set maxWidth(maxWidth:number){
    this._maxWidth = maxWidth;
}

public get minWidth():number{
    return this._minWidth;
}
public set minWidth(minWidth:number){
    this._minWidth = minWidth;
}

}