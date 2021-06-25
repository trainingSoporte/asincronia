//importamos la funcionalidad para hacer un sleep
const sleep = require('util').promisify(setTimeout);

//generamos una funcion que va a devolver una promesa:
const miPromesa = async () => {
    //creamos la promesa
    const promesa = new Promise(async (resolve, reject) => {
        try {
            //para lograr un efecto asincrono, vamos a poner un sleep, esto simulara una demora especifica
            await sleep(5000);//aca espera 5 seg, esta funcion es asincrona
            //una vez transcurrido el tiempo resolvemos la promesa
            resolve('Estoy Lista..');


        } catch (error) {
            //si ocurre una excepcion rechazamos la promesa
            reject(error);
        }
    });
    //
    return promesa;//retornamos la promesa <---
}


//Vamos a usar nuestra promesa
let promesaMia = miPromesa();//aca hemos devuelto una promesa, su estado es Pending ya que demora 5 segundos
console.log(promesaMia);// muestra pending

//opcion con then y catch
console.log('opcion con then y catch');
promesaMia.
    then((data) => {// luego de los 5 segundos, estamos resolviendo, 
        // ahora el estado de la promesa es fulfill, entonces es capturada por el then
        console.log(data);// mostramos el dato que enviamos por la funcion resolve
    }).
    catch((error) => {
        console.error(error);
    });

//opcion con async await
//atencion await no puede estar por fuera de una funcion asincrona, por eso debemos crearla de esta manera:

(async () => {// esta es una funcion anonima que tiene el modificador "async" para volverse asincrona
    try {
        prom = await miPromesa();// await hara esperar hasta que el estado de la promesa sea fulfill
        console.log('opcion con async await');
        console.log(prom);
    } catch (error) {
        console.log('opcion con async await');
        console.error(error);// aca el estado es reject 
    }
})();// notar que ejecutamos la funcion anonima agregando "()" es similar a "anonima()"