export function randomMe(min:number,max:number,negative?:boolean):number{
    if(min>max)
        throw new Error('min can not be higher than max');

        let randomNumber = min + (Math.random()*max);
    
    if(negative){
        if(randomNumber<min + Math.random()*max)
            return -randomNumber;
    }
    
    return randomNumber;
}