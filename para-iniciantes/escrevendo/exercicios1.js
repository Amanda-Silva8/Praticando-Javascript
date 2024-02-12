let numero = prompt('digite um numero');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada: ${numero** 0.5} </p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;
