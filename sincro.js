const fs = require('fs');


const leerArchivo = () => {
    try {
        const archivo = fs.readFileSync('./text.txt');
        console.log(archivo);
        console.log('successfully read');
    } catch (err) {
        // handle the error
    }
}


const escribirArchivo = (data)=>{
    try {
        fs.writeFileSync('./text.txt',data);
        console.log('successfully write');
    } catch (err) {
        // handle the error
    }
}

console.log('leerArchivo()');
leerArchivo();
console.log('mensaje sincro 1');
console.log('escribirArchivo()');
escribirArchivo('MUNDO');
console.log('mensaje sincro 2');
