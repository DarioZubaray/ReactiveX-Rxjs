import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);
