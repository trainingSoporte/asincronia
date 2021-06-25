const fs = require('fs/promises');



// Promise

// ().then().catch()


// (async function(path) {
//     try {
//       await fs.readFile(path);
//       console.log(`successfully deleted ${path}`);
//     } catch (error) {
//       console.error('there was an error:', error.message);
//     }
//   })('/tmp/hello');




// const leerArchivo = () => {
//     try {
//         // fs.readFile('./text.txt')
//         // .then((data)=>{
//         //     console.log(data);
//         // })
//         // .catch((err)=>{
//         //     console.log(err);
//         // }
//         // );

//         return fs.readFile('./text.txt');

//     } catch (err) {
//         // handle the error
//     }
// }


const leerArchivo = async() => {
    try {
        

        return await fs.readFile('./text.txt');
        

    } catch (err) {
        // handle the error
    }
}

// const escribirArchivo = (data)=>{
//     try {
//         fs.writeFile('./text.txt',data,(err) => {
//             if (err) throw err;
//             console.log('successfully write');
//         });

//     } catch (err) {
//         // handle the error
//     }
// }

console.log('leerArchivo()');

let res = leerArchivo();
console.log('res');
console.log(res);
console.log('mensaje sincro 1');

res.then(
    (data) => {
        console.log(data.toString());
    }
).catch(
    (err) => {
        console.log(err);
    }
);

console.log('mensaje sincro 3');

// console.log('escribirArchivo()');
// escribirArchivo('MUNDO');
// console.log('mensaje sincro 2');