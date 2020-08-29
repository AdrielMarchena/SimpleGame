
export namespace Colisions{
    
    export enum TypesOfColision{
        ALL_TO_ALL,
        FIRST_TO_ALL
    }
    
    export interface colisibleObj{
        callBackMessageFunc():void;
    }

    export class Colision{
        public readonly FIRST_ON_ARRAY:number = 0;        
        private _objToColide:colisibleObj[];
        private _methodToColide:Function;
        public mode:TypesOfColision;
        constructor(TypeOfColision:TypesOfColision){
            this.mode = TypeOfColision;
            this._methodToColide = ()=>{console.log("Put a method to test colision here!")};
            this._objToColide = [];
        }

        public addObjToColision(colision:colisibleObj):void{
            this._objToColide.push(colision);
        }

        public putOnFirstIndex(colision:colisibleObj):void{
            let tempArray = this._objToColide;
            this._objToColide = [];
            this._objToColide.push(colision);
            this._objToColide.concat(tempArray);
        }

        public setMethodToColide(func:Function){
            this._methodToColide = func;
        }

        public process(){
            switch(this.mode){
                case TypesOfColision.ALL_TO_ALL: 
                    this.processAllMode();
                break;
                case TypesOfColision.FIRST_TO_ALL:
                    this.processFirtMode();
                break;
            }
        }

        private processAllMode():void{
            //TODO: awesome code here
            for (let i = 0;i<this._objToColide.length;i++){
                for(let j=0;i<this._objToColide.length;i++){
                    if(i==j)    return;
                   if(this._methodToColide(this._objToColide[i],this._objToColide[j])){
                       this._objToColide[i].callBackMessageFunc();
                       this._objToColide[j].callBackMessageFunc();
                   }
                }
            }
        }

        private processFirtMode():void{
            //TODO: awesome code here
            for(let i=0;i<this._objToColide.length;i++){
                if(this._methodToColide(this._objToColide[this.FIRST_ON_ARRAY],this._objToColide[i])){
                    this._objToColide[this.FIRST_ON_ARRAY].callBackMessageFunc();
                    this._objToColide[i].callBackMessageFunc();
                }
            }
        }
    }
}