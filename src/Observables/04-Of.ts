import { of } from 'rxjs';

const obs$ = of(...[1, 2, 3], 4, 5, 6);

console.log('Inicio del observable');
obs$.subscribe( next => {
    console.log('next: ', next),
    null,
    () => console.info('Terminamos la secuencia')
});
console.log('fin del observable');
