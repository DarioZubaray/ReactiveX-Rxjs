import { asyncScheduler } from 'rxjs';


const saludar = () => console.log('Hola mundo"');
const saludos = nombre => console.log(`Hola {nombre}`)

// asyncScheduler.schedule( saludar, 2000);
asyncScheduler.schedule( saludos, 2000, 'Dario');

const subscripcion = asyncScheduler.schedule( function(state){

    console.log('state', state);

    this.schedule(state +1, 1000);

}, 3000, 0);

// setTimeout( () => {
//     subscripcion.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subscripcion.unsubscribe(), 6000);
