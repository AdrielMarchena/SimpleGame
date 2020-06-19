import { TextEntity } from "./TextEntity";

export class ScoreText extends TextEntity{

    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
    }

    public update():void{
        const pl = window.localStorage.getItem('playerScore');
        if(!pl)
            this.text = "0";
        else
            this.text = pl;
    }

}