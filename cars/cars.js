/* 
    Arrow function para calcular a quantidade de carros feitos por hora.
    A função leva dois argumentos: carsPerHour é a quantidade de carros à serem feitos por hora, successMakingCars é a
    taxa de sucesso para fazer eles.

     Retorna successMadeCarsPerHour, que é a quantidade de carros feitos com sucesso na hora, baseado na taxa de sucesso
*/
const calculateWorkingCarsPerHour = (carsPerHour, successMakingCars) => successMadeCarsPerHour = carsPerHour * successMakingCars / 100;  

console.log(calculateWorkingCarsPerHour(400, 5));