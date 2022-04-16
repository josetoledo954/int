console.log("calculo de interes compuesto");
console.log("");

// let monto = prompt("ingrese monto")
const montoInp = document.getElementById("inpMonto")

// let meses = prompt("igrese meses")
const mesesInp = document.getElementById("inpMeses")

// let tasaN = prompt("ingrese tasa de interes")
const tasaInp = document.getElementById("inpTasa")



// let tasa = tasaN / 100 / 12

// function mostrar(evento) {
    
// }



const boton = document.getElementById("boton")

boton.addEventListener("click", calcular)

function calcular() {
    let monto = parseInt(montoInp.value)
    let meses = parseInt(mesesInp.value)
    let tasaN = parseInt(tasaInp.value)
    
    let j = 0
    let intAcum = 0
    let tasa = tasaN / 100 / 12
    let interes = 0

    
    for (let i = monto; j < meses ; i = i + (i * tasa)) {
    
        j ++
        interes = i * tasa
        let acumulado = i + interes
        intAcum = intAcum + interes
        interesesTotales.push (intAcum.toFixed(2))
        mesesTotales.push (j)
        montosTotales.push (acumulado.toFixed(2))
        console.log("mes " + j);
        console.log("acumulado " + acumulado.toFixed(2));
        console.log("interes " + interes.toFixed(2));
        console.log("intereses acumulados " + intAcum.toFixed(2));
        console.log("");
    }
    
    console.log("se calcularon intereses para " + monto + " a " + meses + " meses " + "con una tasa del " + tasaN);
    console.log("");
    
    // console.log(interesesTotales[0] / monto);
    
    
    
}

// console.log("eventos form");

// const link = document.getElementById("send")

// link.addEventListener("click", clickEnEnviar)

// function clickEnEnviar(evento) {
//     evento.preventDefault()
//     console.log(evento);
//     validarFormulario()
// }



// function validarFormulario() {
//     const user = document.getElementById("user")
//     const password = document.getElementById("password")
//     console.log(user.value);
//     console.log(password.value);
// }

// while (monto == "") {
//     alert("ingrese monto")
//     monto = prompt("ingrese monto")
// }

// while (meses == "") {
//     alert("ingrese meses")
//     meses = prompt("ingrese meses")
// }

// while (tasaN == "") {
//     alert("ingrese tasa")
//     tasaN = prompt("ingrese tasa")
// }

// monto = parseInt(monto)
// meses = parseInt(meses)
// tasaN = parseFloat(tasaN)
// tasa = tasaN / 100 / 12

let interesObtenido = interesesTotales[interesesTotales.length - 1] / monto * 100
    
    console.log("el interes obtenido es de " + interesObtenido.toFixed(2));
    
    class Intereses {
        constructor (monto, meses, intereses){
            this.monto = monto
            this.meses = meses
            this.interes = intereses
        }
    }
    
    let lista = []
    for (const mes of mesesTotales) {
        let posicion = mes - 1 
        let monT = montosTotales[posicion]
        let intT = interesesTotales[posicion]
        lista.push(new Intereses(monT,mes, intT))
    }
    console.log(lista);
    
    
    
    
    
    const porMes = lista.find (p => p.meses == 2)
    console.log("busqueda por find " , porMes);
    
    const mayor = lista.filter( p => p.interes > 10 )
    console.log("busqueda por filter " , mayor);




interesesTotales = []
mesesTotales = []
montosTotales = []







const mesLi = document.getElementById("mes")
const acumuladoLi = document.getElementById("acumulado")
const interesLi = document.getElementById("interes")

lista.forEach((e) => {
    
    const mesDiv = document.createElement ("div")
    mesDiv.innerHTML = `
        <div>mes ${e.meses}</div>
        `
    mesLi.appendChild(mesDiv)
        
    const acumuladoDiv = document.createElement ("div")
    acumuladoDiv.innerHTML = `
        <div>acumulado ${e.monto}</div>
    `
    acumuladoLi.appendChild(acumuladoDiv)
        
    const interesDiv = document.createElement ("div")
    interesDiv.innerHTML = `
        <div>interes ${e.interes}</div>
    `
    interesLi.appendChild(interesDiv)
    })