//Función para mostrar una lista

  let ListaDePaises = document.getElementById("ListaPaises")
  ListaDePaises.style.display = "none"

  let ButtonMostrar = document.getElementById('MostrarLista')
  ButtonMostrar.addEventListener('click', MostrarOcultar)

  function MostrarOcultar() {
    if (ButtonMostrar.classList.contains('mostrar')) {
      ButtonMostrar.classList.remove('mostrar')
      ButtonMostrar.innerHTML='Ocultar Lista de paises'
      ButtonMostrar.addEventListener('click',()=>{ListaDePaises.style.display = 'none'})
    } else {
      ButtonMostrar.classList.add('mostrar')
      ButtonMostrar.innerHTML='Ver Lista De Paises'
      ButtonMostrar.addEventListener('click',()=>{ListaDePaises.style.display = 'block'})
    }
  }

//Aquí es para la primera lista
  let Listaxd = document.getElementById("ListaXD")
  Listaxd.style.display = "none"

  let BotonMostrar = document.getElementById('MostrarListaUno')
  BotonMostrar.addEventListener('click', MostarListaUno)

  function MostarListaUno() {if (BotonMostrar.classList.contains('mostrar')) {
    BotonMostrar.classList.remove('mostrar')
    BotonMostrar.innerHTML='Ocultar lista XD'
    BotonMostrar.addEventListener('click',()=>{Listaxd.style.display = 'none'})
  } else {
    BotonMostrar.classList.add('mostrar')
    BotonMostrar.innerHTML='Ver Lista importante'
    BotonMostrar.addEventListener('click',()=>{Listaxd.style.display = 'block'})
  }}


  //Recursividad
  function suma(number) {
    if (number===0||number===1) {
      return 1
    } else {
      return number+suma(number-1)
    }
  }

  suma(4)

  //Fibonacci
  function Fibonacci(number) {
    if (number===-1/*||number===1||number===2*/) {
      return 1
    } else {
      let n = number+Fibonacci(number-1)
      console.log(n)
      return n
    }
  }

  Fibonacci(6)