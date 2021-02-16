//FUNCIÓN NOMBRE INCLUYE - Devuelve true si todas las palabras del array empiezna por m
function nombresInclude(array:string[]):boolean
{   let booleano:boolean = true;
    let i=0;
    while ((i<array.length) && booleano==true)
    {
        if(array[i][0]!="m")
        {
           booleano = false 
        } 
        // else 
        // {
        //     booleano = false
        // } i++;
    } return booleano
} 

// FUNCIÓN ARRAYPAR - Devuelve si hay algun número de par dentro del array de números 
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

// FUNCIÓN NUM IMPARES - Devuelve todos los numeros impares de un un numero dado
function numimpares(num:number)
{   let i=-1
    while(i<num)
    {
    console.log(i+=2)
    }
}