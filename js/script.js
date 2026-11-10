function saludar() {
// . value permite leer el valor de un campo de formulario
let nombre = document.getElementById("nombre").value;

// 1. Mostrar informacion en una ventana emergente
alert('Hola ${nombre}');

// 2. Mostrar informacion dentro de un input
document.getElementById("resultado").value = 'Hola ${nombre}';
}
function registrar() {

    // Obtener los datos ingresados por el usuario
    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;

    // 1. Mostrar los datos en una ventana emergente
    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);

    // 2. Mostrar la información en un input
    document.getElementById("resultado11").value = 
        `${nombre} - ${programa}`;

   // 3. Mostrar texto utilizando innerText
    document.getElementById("resultado22").innerText = 
        `Nombre: ${nombre} | Programa: ${programa}`;

    // 4. Mostrar contenido HTML con formato
    document.getElementById("resultado33").innerHTML = 
        `<p style="color: blue;">
            <strong>Aprendiz:</strong> ${nombre}<br>
            <strong>Programa:</strong> ${programa}
        </p>`;

    // 5. Mostrar texto utilizando textContent
    document.getElementById("resultado44").textContent = 
        `El aprendiz ${nombre} está inscrito en ${programa}.`;
    }
    function calcularOperaciones() {

    // Los dos campos llegan siempre como texto, sin importar lo que el usuario escriba
    let valor1 = document.getElementById("valorUno").value;
    let valor2 = document.getElementById("valorDos").value;

    // 1. parseInt(): toma los dígitos y corta en el primer decimal
    let entero1 = parseInt(valor1);
    let entero2 = parseInt(valor2);
    document.getElementById("resParseInt").textContent = 
        `parseInt("${valor1}") = ${entero1} | parseInt("${valor2}") = ${entero2}`;

    // 2. parseFloat(): igual que parseInt, pero conserva los decimales
    let decimal1 = parseFloat(valor1);
    let decimal2 = parseFloat(valor2);
    document.getElementById("resParseFloat").textContent = 
        `parseFloat("${valor1}") = ${decimal1} | parseFloat("${valor2}") = ${decimal2}`;
         // 3. Number(): revisa el texto completo; si no es válido, da NaN
    let numero1 = Number(valor1);
    let numero2 = Number(valor2);
    document.getElementById("resNumber").textContent = 
        `Number("${valor1}") = ${numero1} | Number("${valor2}") = ${numero2}`;

    // 4. Suma usando los valores convertidos con parseFloat, para no perder decimales
    let suma = decimal1 + decimal2;
    document.getElementById("resSuma").textContent = 
        `${decimal1} + ${decimal2} = ${suma}`;
}