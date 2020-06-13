export class Canvas{

        private  _canvas: HTMLCanvasElement;
        private  _ctx: CanvasRenderingContext2D;

        constructor(){
            this._canvas = document.querySelector('canvas');
            if(this._canvas == null || this._canvas == undefined){
                this._canvas = document.createElement('canvas');
            }
            this._ctx = this._canvas.getContext('2d');
        }

        resizeCanvas(width:number,height:number):void{
            this._canvas.width = width;
            this._canvas.height = height;
        }

        get canvas():HTMLCanvasElement{
            return this._canvas;
        }
        get ctx():CanvasRenderingContext2D{
            return this._ctx;
        }
}



    
    
