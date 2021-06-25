const fs = require('fs');




const leerArchivo = (callback) => {
    try {
        fs.readFile('./text.txt', (err, data) => {
            if (err) throw err;
            const archivo = data;
            console.log('successfully read');
            callback(archivo.toString());
        });

    } catch (err) {
        // handle the error
    }
}


const escribirArchivo = (data)=>{
    try {
        fs.writeFile('./text.txt',data,(err) => {
            if (err) throw err;
            console.log('successfully write');
        });
        
    } catch (err) {
        // handle the error
    }
}

console.log('leerArchivo()');
leerArchivo((datos) => {
    console.log('Datos del Archivo');
    console.log(datos);
});
console.log('mensaje sincro 1');
console.log('escribirArchivo()');
escribirArchivo('MUNDO');
console.log('mensaje sincro 2');