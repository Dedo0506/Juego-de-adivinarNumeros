//Variables
let intentos = 1;
let numeroUsuario= 0;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

let numero1= parseInt(prompt("Indica apartir de que numero se generara el valor aleatorio "));
let numero2= parseInt(prompt("Indica hasta que numero se generara el valor aleatorio "));
let numeroFinal= numero2-numero1;
let numeroSecreto = Math.floor(Math.random(numero1)*numeroFinal)+1;
console.log(numero1);
console.log(numero2);
console.log(numeroFinal);
console.log(numeroSecreto);


console.log(numeroUsuario);
while (numeroUsuario != numeroSecreto) {        

    numeroUsuario = parseInt(prompt("adivina el numero "));
    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
} 





/* let name = 'daniela';
console.log('hola ' + name);

alert("hola " +name); 

let valor1 = parseInt(prompt("ingresa el 1er numero a sumar: "));
let valor2 = parseInt(prompt("ingresa el 2do numero a sumar: "));
let resultado = valor1+valor2;
alert(`el resultado es ${resultado} que es un numero ${resultado >= 0 ? 'es positivo': 'es negativo'}`);*/