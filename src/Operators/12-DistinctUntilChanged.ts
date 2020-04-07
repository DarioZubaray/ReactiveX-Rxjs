import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of<number|string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$.pipe(
    distinctUntilChanged() // ===
).subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr Willy'
    },
];

from(personajes).pipe(
    distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre)
).subscribe(console.log);
