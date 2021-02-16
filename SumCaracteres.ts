export function sumCaracteres(array:string[]):number
{  let sumNumer:number =0;
    for(let i=0;i<array.length;i++)
    {  
        sumNumer += array[i].length


    } return sumNumer;
} 

//console.log(sumCaracteres(["esos","locos","años"]))