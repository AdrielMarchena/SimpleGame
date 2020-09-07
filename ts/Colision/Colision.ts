//Thinking in remove this namespace, dont have any meaning
export namespace Colisions{
    export enum TypesOfColision{
        ALL_TO_ALL,
        FIRST_TO_ALL
    }
    export enum TypesOnColision{
        PLAYER,
        GROUND,
        ENEMY
    }
    export class UtilInfo{
        public x:number;
        public y:number;
        public w:number;
        public h:number;
        public type:TypesOnColision;
        constructor(x?:number,y?:number,w?:number,h?:number,type?:TypesOnColision){
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.type = type;
        }
    }

    export interface colisibleObj{
        callBackMessageFunc(cause:colisibleObj,colisionInstance?:Colision):void;
        getUtilInfo():UtilInfo;
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

        public popColision(obj:colisibleObj){
            let ind = this._objToColide.indexOf(obj);
            this._objToColide.splice(ind,1);
        }

        private processAllMode():void{
            for (let i = 0;i<this._objToColide.length;i++){
                for(let j=0;i<this._objToColide.length;i++){
                    if(i==j)    continue;
                   if(this._methodToColide(this._objToColide[i],this._objToColide[j])){
                       this._objToColide[i].callBackMessageFunc(this._objToColide[j],this);
                       this._objToColide[j].callBackMessageFunc(this._objToColide[i],this);
                   }
                }
            }  
        }

        private processFirtMode():void{
            for(let i=0;i<this._objToColide.length;i++){
                if(i==0) continue;
                if(this._methodToColide(this._objToColide[this.FIRST_ON_ARRAY],this._objToColide[i])){
                    this._objToColide[this.FIRST_ON_ARRAY].callBackMessageFunc(this._objToColide[i],this);
                    this._objToColide[i].callBackMessageFunc(this._objToColide[this.FIRST_ON_ARRAY],this);
                }
            }
        }
    }
}