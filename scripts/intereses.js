console.log("calculo de interes compuesto");
console.log("");

const montoInp = document.getElementById("inpMonto")

const mesesInp = document.getElementById("inpMeses")

const tasaInp = document.getElementById("inpTasa")

const nombreInp = document.getElementById("inpNombre")





const boton = document.getElementById("boton")

const botonBuscar = document.getElementById("botonBuscar")

boton.addEventListener("click", calcular)

botonBuscar.addEventListener("click", buscar)

// async function getBancos() {

//     const URLbancos = `../json/data.json`
//     const res = await fetch(URLbancos)
//     const data = await res.json()
//     console.log(data);
//     data.forEach((e) => {
//         const selector = document.getElementById("inpTasa")
//         const opcion = document.createElement("option")
//         opcion.innerText = `${e.name} tasa ${e.tasa} `
//         opcion.value = e.tasa
//         selector.appendChild(opcion)
//     })
// }
async function getBancos() {

    const URLbancos = `https://rickandmortyapi.com/api/character`
    const res = await fetch(URLbancos)
    const {results: data} = await res.json()
    console.log(data);
    data.forEach(async(e) => {
        const selector = document.getElementById("inpTasa")
        const opcion = document.createElement("option")
        opcion.innerText = `${e.name} tasa ${e.episode.length} `
        opcion.value = e.id
        selector.appendChild(opcion)
    })
}
getBancos()

const inpTasaM = document.getElementById("inpTasaM")

document.getElementById("inpTasa").addEventListener("click", function (e){
    if (inpTasa.value == "") {
        inpTasaM.disabled = false;
    }else{
        
        inpTasaM.disabled = true;
    }
    console.log(inpTasa.value);
    async function getImg() {

        const URLbancos = `https://rickandmortyapi.com/api/character`
        const res = await fetch(URLbancos)
        const {results: data} = await res.json()
        console.log(data);
        const indice = data.findIndex((item) => item.id == inpTasa.value)
        console.log("indice", indice);
        if (inpTasa.value != "") {
            const img = document.getElementById("img")
            img.innerHTML = ""
            const opcion = document.createElement("img")
            opcion.src = (data[indice].image)
            img.appendChild(opcion)
            const dialogo = document.createElement("div")
            dialogo.innerHTML = `
                <p id= "dialogo"> mi nombre es ${data[indice].name.split(" ")[0] } y voy a calcular tu interes </p>
                ` 
            img.appendChild(dialogo)
        }else{
            img.innerHTML = `
                <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="">
                <div>
                    <p id="dialogo">puedes elegir un personaje</p>
                </div>
                `
        }
        
    }
    getImg()
})



const imp = document.getElementById("mostrar")
const mesLi = document.getElementById("mes")
const acumuladoLi = document.getElementById("acumulado")
const interesLi = document.getElementById("interes")
const nombreLi = document.getElementById("nombre")

function buscar() {
    imp.innerHTML = ""
    mesLi.innerHTML = ""
    acumuladoLi.innerHTML = ""
    interesLi.innerHTML = ""
    nombreLi.innerHTML = ""
    img.innerHTML = `
                <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="">
                <div>
                    <p id="dialogo">puedes elegir un personaje</p>
                </div>
                `
    
    const buscarInp = document.getElementById("inpBuscar")
    const buscar = buscarInp.value
    
   

    const nombreDiv = document.createElement ("div")
    nombreDiv.innerText = `seleccione una de las coincidencias para la busqueda de: ${buscarInp.value}`
    nombreLi.appendChild(nombreDiv)

    const bus = Object.keys(localStorage)
    const busq = bus.filter(p => p.includes(buscar))
    console.log("busq", busq);
    console.log("bus", bus);

    busq.forEach((e) => {
        const nombreDiv = document.createElement ("a")
        nombreDiv.className = "nombresLista"
        nombreDiv.href = ""
        nombreDiv.innerHTML = `
        <li id="nombresLista">${e}</li>       
        `
        nombreLi.appendChild(nombreDiv)
    })

    

    const nombresLi = document.querySelectorAll("#nombresLista")
    nombresLi.forEach((nombresLista) => nombresLista.addEventListener("click", mostrar))


    function mostrar(e) {
        e.preventDefault()
        const nombreMostrar = e.target.innerText
        console.log(nombreMostrar);

        imp.innerHTML = ""
    mesLi.innerHTML = ""
    acumuladoLi.innerHTML = ""
    interesLi.innerHTML = ""
    nombreLi.innerHTML = ""

        const storage = JSON.parse(localStorage.getItem(nombreMostrar))

        storage.forEach((e) => {
        
            const mesDiv = document.createElement ("div")
            mesDiv.innerHTML = e.meses
            mesLi.appendChild(mesDiv)
                
            const acumuladoDiv = document.createElement ("div")
            acumuladoDiv.innerText = e.monto
            acumuladoLi.appendChild(acumuladoDiv)
                
            const interesDiv = document.createElement ("div")
            interesDiv.innerText = e.interes
            interesLi.appendChild(interesDiv)
            })

            const nombreDiv = document.createElement ("div")
    nombreDiv.innerText = `nombre: ${nombreMostrar}`
    nombreLi.appendChild(nombreDiv)
    

    console.log((storage));
    }
}

function calcular() {
    
let tasaUso = 0

    if (tasaInp.value == "") {
        tasaUso = inpTasaM
    }else {
        tasaUso = tasaInp
    } 
        
    montoInp.value == "" && Swal.fire('ingrese un monto')
    mesesInp.value == "" && Swal.fire('ingrese cantidad de meses')
    tasaUso.value == ""  && Swal.fire('ingrese una tasa')
    nombreInp.value == "" && Swal.fire('ingrese un nombre')
    
    const bus = Object.keys(localStorage)
    const indice = bus.findIndex((item) => item == nombreInp.value)
    
    if (indice >= 0) {
        Swal.fire('el nombre nombre esta en uso')
    }
    
    if (montoInp.value != "" && mesesInp.value != "" && tasaUso.value != "" && nombreInp.value != "" && indice <= 0) {

    let monto = parseInt(montoInp.value)
    let meses = parseInt(mesesInp.value)
    let tasaN = parseInt(tasaUso.value)
    let nombre = nombreInp.value
    
    let j = 0
    let intAcum = 0
    let tasa = tasaN / 100 / 12
    let interes = 0
    
    interesesTotales = []
    mesesTotales = []
    montosTotales = []

    imp.innerHTML = ""
    mesLi.innerHTML = ""
    acumuladoLi.innerHTML = ""
    interesLi.innerHTML = ""
    nombreLi.innerHTML = ""

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
        let monT = parseFloat(montosTotales[posicion])
        let intT = parseFloat(interesesTotales[posicion])
        lista.push(new Intereses(monT,mes, intT))
    }
    console.log(lista);
    
    const porMes = lista.find (p => p.meses == 2)
    console.log("busqueda por find " , porMes);
    
    const mayor = lista.filter( p => p.interes > 10 )
    console.log("busqueda por filter " , mayor);

    // const list = document.createElement("li")
    // list.innerText = ("se calcularon intereses para " + monto + " a " + meses + " meses " + "con una tasa del " + tasaN)
    
    // const intOb = document.createElement("li")
    // intOb.innerText = ("el interes ontenido es de " + interesObtenido.toFixed(2))

    lista.forEach((e) => {
        
        const mesDiv = document.createElement ("div")
        mesDiv.innerHTML = e.meses
        mesLi.appendChild(mesDiv)
            
        const acumuladoDiv = document.createElement ("div")
        acumuladoDiv.innerText = e.monto
        acumuladoLi.appendChild(acumuladoDiv)
            
        const interesDiv = document.createElement ("div")
        interesDiv.innerText = e.interes
        interesLi.appendChild(interesDiv)
        })

        const nombreDiv = document.createElement ("div")
        nombreDiv.innerText = `nombre: ${nombre}`
        nombreLi.appendChild(nombreDiv)

    // lista.forEach((e) => {
    //     const intLi = document.createElement ("div")
    //     intLi.innerHTML = `
        
    //         <div>mes ${e.meses}</div>
    //         <div>acumulado ${e.monto}</div>
    //         <div>interes ${e.interes}</div>
        
    //     `
    //     imp.appendChild(intLi)
    // })
    dialogo.innerHTML = `
    <p>para ${monto} a ${meses} meses el con una tasa del ${tasaN}</p>
    <p>el interes obtenido es de ${interesObtenido.toFixed(2)} </p>
    ` 
    // imp.appendChild(intOb)
    // imp.appendChild(list)
            
            montoInp.value = ""
            mesesInp.value = ""
            tasaInp.value = ""
            nombreInp.value = ""
            inpTasaM.value = ""
            localStorage.setItem(nombre, JSON.stringify(lista))
            console.log(nombre.replace(/ /g, ""));
        }
    // localStorage.setItem("listaStorage", JSON.stringify(lista))
}


// localStorage.setItem("productos", JSON.stringify(productos))

// const productosJson = localStorage.getItem("productos")

// console.log(typeof productosJson);


// boton.addEventListener("click", () => {
//     const input = document.getElementById("entrada")
//     const nombreProducto = input.value 
//     const nuevoProducto = document.createElement ("li")
//     nuevoProducto.innerText = nombreProducto
//     const root = document.getElementById("root")
//     root.appendChild(nuevoProducto)
// })











