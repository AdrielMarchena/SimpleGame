export class Canvas{

        private  _canvas: HTMLCanvasElement;
        private  _ctx: CanvasRenderingContext2D;
        public defaultWidth:number;
        public defaultHeight:number;

        constructor(){
            //Search for canvas element on html file
            this._canvas = document.querySelector('canvas');
            //Test to see if html actually have a canvas element
            //If not, creates one and put after de body begin
            if(this._canvas == null || this._canvas == undefined){
                this._canvas = document.createElement('canvas');
                document.body.insertAdjacentElement('afterbegin',this._canvas);
            }
            //Get the context 2d of the canvas
            this._ctx = this._canvas.getContext('2d');
            this.defaultWidth = 600;
            this.defaultHeight = 600;
        }

        /**
         * Resize the canvas with the given values
         * @param width The width of canvas; Default = 600 (can be changed)
         * @param height The height of canvas; Default = 600 (can be changed)
         */
        public resizeCanvas(width:number = this.defaultWidth,height:number = this.defaultHeight):void{
            this._canvas.width = width;
            this._canvas.height = height;
        }

        public get canvas():HTMLCanvasElement{
            return this._canvas;
        }
        public get ctx():CanvasRenderingContext2D{
            return this._ctx;
        }
}



    
    
