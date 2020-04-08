import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10).pipe(
//     filter( val => val % 2 === 1)
// ).subscribe(console.log);

range(5, 10).pipe(

    filter( (val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })

)//.subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

from(personajes).pipe(
    filter(p => p.tipo === 'heroe'),
    map(p => p.nombre)
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(val => val.code),
    filter(code => code === 'Enter')
);

keyup$.subscribe(console.log);