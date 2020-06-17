export class Canvas{

        private static _canvas: HTMLCanvasElement;
        private static _ctx: CanvasRenderingContext2D;
        public defaultWidth:number;
        public defaultHeight:number;

        constructor(){
            //Search for canvas element on html file
            Canvas._canvas = document.querySelector('canvas');
            //Test to see if html actually have a canvas element
            //If not, creates one and put after de body begin
            if(Canvas._canvas == null || Canvas._canvas == undefined){
                Canvas._canvas = document.createElement('canvas');
                document.body.insertAdjacentElement('afterbegin',Canvas._canvas);
            }
            //Get the context 2d of the canvas
            Canvas._ctx = Canvas._canvas.getContext('2d');
            this.defaultWidth = 600;
            this.defaultHeight = 600;
        }

        /**
         * Resize the canvas with the given values
         * @param width The width of canvas; Default = 600 (can be changed)
         * @param height The height of canvas; Default = 600 (can be changed)
         */
        public resizeCanvas(width:number = this.defaultWidth,height:number = this.defaultHeight):void{
            Canvas._canvas.width = width;
            Canvas._canvas.height = height;
        }

        public get canvas():HTMLCanvasElement{
            return Canvas._canvas;
        }
        public get ctx():CanvasRenderingContext2D{
            return Canvas._ctx;
        }
}



    
    
