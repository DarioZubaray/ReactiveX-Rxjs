import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1, 2, 3, 4 ,5];

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

// Reduce

from(numeros).pipe(
    reduce(totalReducer, 0)
).subscribe(console.log);

// Scan

from(numeros).pipe(
    scan(totalReducer, 0)
).subscribe(console.log);

// Redux

interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}
const user: Usuario[] = [
    { id : 'daro', autenticado: false, token: null},
    { id : 'daro', autenticado: true, token: 'ABC'},
    { id : 'daro', autenticado: false, token: 'ABC123'},
];

const state$ = from(user).pipe(
    scan<Usuario>( (acc, curr) => {
        return {...acc, ...curr}
    }, {edad: 31})
);

const id$ = state$.pipe(
    map( state => state.id)
).subscribe(console.log);
