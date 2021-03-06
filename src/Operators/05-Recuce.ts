import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


// Reduce en javascript
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);

console.log(total);

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: next  => console.log('next', next),
    complete: () => console.log('complete')
})
