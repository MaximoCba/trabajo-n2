const inputNum = document.getElementById('input-numero')
const formList = document.getElementById('formulario-list')
const formBtn = document.getElementById('button')
const pizzaContainer = document.getElementById('idPizzas')


const Pizzas = [
  {
    id: 1,
    nombre: "pizza muzza",
    ingredientes: ["salsa", "muzzarella", "oregano"],
    precio: 500,
  },

  {
    id: 2,
    nombre: "pizza especial",
    ingredientes: ["salsa", "muzzarella", "jamon", "aceituna", "morron"],
    precio: 1100,
  },

  {
    id: 3,
    nombre: "calabresa",
    ingredientes: ["salsa", "muzzarella", "longaniza", "aceituna"],
    precio: 1300,
  },
  {
    id: 4,
    nombre: "putanesca",
    ingredientes: [
      "salsa",
      "rojadas de tomate",
      "mozzrella",
      "anchoas",
      "oregano",
    ],
    precio: 1360,
  },
  {
    id: 5,
    nombre: "silvestre",
    ingredientes: ["salsa", "mozarrella", "champignones"],
    precio: 2000,
  },
  {
    id: 6,
    nombre: "americana",
    ingredientes: [
      "salsa",
      "mozarella",
      "pollo a la barbacoa",
      "panceta",
      "cheddar",
      "cebolla colorada",
      "verdeo",
    ],
    precio: 2050,
  },
  {
    id: 7,
    nombre: "de mar",
    ingredientes: [
      "salsa",
      "mozarella",
      "mix frutos de mar",
      "langostinos",
      "aceite de pimenton ahumado",
    ],
    precio: 2800,
  },
  {
    id: 8,
    nombre: "rellena vegetarioana",
    ingredientes: [
      "mozarrela",
      "tomattes cherrys",
      "berenjenas",
      "pimentos al recoldo",
      "cebollas",
      "olivas negra",
      "chamoignones",
      "rucula",
    ],
    precio: 1980,
  },
];

const renderPizza = (Pizzas) => {
    if (!Pizzas) {
        console.log('no existe la pizza')
    } else {
        pizzaContainer.innerHTML = `<div>
            <h2>${Pizzas.nombre}</h2>
            <h3>${Pizzas.precio}</h3>
        </div>`
    }
}

const searchPizza = (value) => Pizzas.find((pizzas) => Pizzas.id === value)

const muestraError = () => {
    console.log('error')
}

const sendForm = (e) => {
    e.preventDefault()
    const SEARCHINPUT = inputNum.value
    const searchedPizza = searchPizza(Number(SEARCHINPUT))
    renderPizza(searchedPizza)
    if (SEARCHINPUT) {
        muestraError(SEARCHINPUT)
    }
    console.log(`ESTOY LLAMANDO AL ${SEARCHINPUT}`)
}


const init = () => {
    formList.addEventListener('submit', sendForm)
}

init()