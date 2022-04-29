//Ejercicio sobre estructuras de control y flujos
/*
    Requisitos:
    Recorrer los numeros del 1 al 100
        -Si es par mostrar por pantalla que el numero es par
        -Si es impar mostrar por pantalla que el numero es impar
*/


for(let i = 1; i <= 100; i++){
    if(i%2 == 0){
        console.log("El numero "+i+" s par");
    }else{
        console.log("El numero "+i+" es impar");
    }
}