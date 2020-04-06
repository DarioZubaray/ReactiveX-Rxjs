import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => console.log('tap - antes', x)),
    map(val => val * 10),
    tap({
        next: x => console.log('tap - despues', x),
        complete: () => console.log('tap - Se termino todo')
    })
).subscribe(val => console.log('subs', val));