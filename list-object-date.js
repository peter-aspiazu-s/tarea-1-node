// Listas o arrays
const lista = [1, 'hola', true, undefined, null]
const lista2 = new Array(1, 'hola', true, undefined, null)
console.log(lista)
console.log(lista2)
// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: 'Xiaomi',
    isWhite: false,
    contactos: ['Gorka', 'Martin', 'Raul'],
    tarjeta: {
        marca: 'Sandisk',
        almacenamiento: 32,
    },
    "altura-tarjeta": 4
}

movil.anyo = 2022
movil.marca = "Samsung"

console.log(movil)
// Fechas

const ahora = new Date()
console.log(ahora)

const fecha_milis = new Date(10)
console.log(fecha_milis)

const fecha_cadena = new Date("march 2020")
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 2, 15)
console.log(fecha_valores)


const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anio = ahora.getFullYear()
console.log(dia, mes, anio)

const fecha_nacimiento = new Date("june 1996 17")
console.log(fecha_nacimiento)