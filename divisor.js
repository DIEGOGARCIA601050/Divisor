// for (let i = 15; i <= 5915; i++) {
//   const resultado = 82810/i;
//   if (Number.isInteger(resultado)) {
//     // console.log(`Número, ${i},`);
//     // console.log(`ResultadoDeLaDivisiónEntre82810, ${resultado},`);
//     // console.log(`El Número: ${i}``Da como resultado de la división entre 82810 al número: ${resultado}`)
//     // console.log("-");
//     // console.log(`${i},`);
//     // console.log(`${resultado},`);
//   }
// }

//Ciclo for para resolver la cuártica
let divisores = [
  26,
  3185,
  
  35,
  2366,
  
  49,
  1690,
  
  65,
  1274,
  
  70,
  1183,
  
  91,
  910,
  
  98,
  845,
  
  130,
  637,
  
  169,
  490,
  
  182,
  455,
  
  245,
  338,
  
  338,
  245,
  
  455,
  182,
  
  490,
  169,
  
  637,
  130,
  
  845,
  98,
  
  910,
  91,
  
  1183,
  70,
  
  1274,
  65,
  
  1690,
  49,
  
  2366,
  35,
  
  3185,
  26,
  
  5915,
  14
]
let treintaicinco = divisores[2]
console.log(81*treintaicinco**4)

//Función para mostrar una lista

  let ListaDePaises = document.getElementById("ListaPaises")
  ListaDePaises.style.display = "none"

  let ButtonMostrar = document.getElementById('MostrarLista')
  ButtonMostrar.addEventListener('click', MostarLista)

  function MostarLista() {
    ListaDePaises.style.display = 'block'
  }

  function OcultarLista() {
    ListaDePaises.style.display = 'none'
  }

  let ButtonOcultar = document.getElementById('OcultarLista')
  ButtonOcultar.addEventListener('click', OcultarLista)
//Aquí es para la primera lista
  let Listaxd = document.getElementById("ListaXD")
  Listaxd.style.display = "none"

  let BotonMostrar = document.getElementById('MostrarListaUno')
  BotonMostrar.addEventListener('click', MostarListaUno)

  function MostarListaUno() {
    Listaxd.style.display = 'block'
  }

  function OcultarListaUno() {
    Listaxd.style.display = 'none'
  }

  let BotonOcultar = document.getElementById('OcultarListaUno')
  BotonOcultar.addEventListener('click', OcultarListaUno)
  
  //Recursividad
  function suma(number) {
    if (number===0||number===1) {
      return 1
    } else {
      return number+suma(number-1)
    }
  }

  suma(4)