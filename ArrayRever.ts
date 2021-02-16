
function arrayInvers(array:number[]): number[]
{ 

    let result:number[] = [];

    for(let i= array.length - 1;i>=0; i--)
    {
        result.push(array[i])
    }

    return result
} 

let arraito:number[] = [15,2,63,74,5,776,7879,8654];




console.log(arrayInvers(arraito));
