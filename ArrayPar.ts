function ArrayPar(array:number[]):boolean
{   let numeroPar:number[] = [];
    let i=0
    let booleano:boolean;
    
    
    while(i<array.length)
    { 
        if(array[i] % 2 == 0)
        {
            booleano = true
        }i++
    } 
    return booleano;
}
console.log("Hay un par: " + ArrayPar([23,543,564,64,11,22]))