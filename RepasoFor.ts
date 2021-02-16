//FUNCIÓN SUMA CARACTERES- DEVUELVE EL NÚMERO DE CARACTERES DE UN ARRAY DE STRINGS
function sumCaracteres(array:string[]):number
{  let sumNumer:number =0;
    for(let i=0;i<array.length;i++)
    {  
        sumNumer += array[i].length


    } return sumNumer;
} 

// FUNCIÓN ARCOIRIS - TE DEVUELVE SI EL COLOR DEL ARRAY ESTÁ DENTRO DEL ARCOIRIS
function arcoiris(array:string[])
{ 
    for(let i=0; i<array.length;i++)
    {
        if(array[i].includes("rojo"))
        {
            console.log("El color rojo está incluido")
        }
        if(array[i].includes("naranja"))
        {
            console.log("El color naranja está en el arcoiris")
        }   
        if(array[i].includes("amarillo"))
        {
            console.log("El color amarillo está en el arcoiris")
        }
        if(array[i].includes("verde"))
        {
            console.log("El color verde está en el arcoiris")
        }
        if(array[i].includes("azul"))
        {
            console.log("El color azul está en el arcoiris")
        }
        if(array[i].includes("indigo"))
        {
            console.log("El color indigo está en el arcoiris")
        }
        if(array[i].includes("violeta"))
        {
            console.log("El color violeta está en el arcoiris")
        }
        if (array[i]!="rojo"&&array[i]!="naranja"&&array[i]!="amarillo"&&array[i]!="verde"&&array[i]!="azul"&&array[i]!="indigo"&&array[i]!="violeta")
        {
            console.log("El color " +array[i]+" no está en el arcoiris")
        }
    }
    
} 
// FUNCIÓN ARRAY INVETRTIDO - VOLTEA EL ORDEN DEL ARRAY

function arrayInvers(array:number[]): number[]
{ 

    let result:number[] = [];

    for(let i= array.length - 1;i>=0; i--)
    {
        result.push(array[i])
    }

    return result
} 