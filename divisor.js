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

  function MostarListaUno() {if (BotonMostrar.classList.contains('mostrar')) {
    BotonMostrar.classList.remove('mostrar')
    BotonMostrar.innerHTML='Ocultar lista XD'
    BotonMostrar.addEventListener('click',()=>{Listaxd.style.display = 'none'})
  } else {
    BotonMostrar.classList.add('mostrar')
    BotonMostrar.innerHTML='Mostrar lista XD'
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

//boton de likes
  const likesbtn = document.getElementById('likebtn')
  likesbtn.addEventListener('click',function(){
    if(likesbtn.classList.contains('liked')){
      likesbtn.classList.remove('liked')
      likesbtn.innerHTML='Quitar me gusta'
    } else{
      likesbtn.classList.add('liked')
      likesbtn.innerHTML='Me gusta'
    }
  })