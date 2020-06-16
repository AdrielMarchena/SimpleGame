export function randomMe(min:number,max:number,negative?:boolean):number{
    if(min > max)
        throw new Error('min can not be higher than max');
    
    let rt = min + (Math.random()*max);

    if(negative)
        if(Math.random() > 1/2)
            rt = -rt;

    return rt;
}