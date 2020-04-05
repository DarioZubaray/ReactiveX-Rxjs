import { range, asyncScheduler } from 'rxjs';

const src$ = range(1,5, asyncScheduler); // 1, 2, 3, 4, 5
// const src$ = range(-5, 10); // Desde -5 10 emisiones: -5, -4, -3, -2, -1, 0, 1, 2, 3, 4
// const src$ = range(1,100);

console.log('inicio');
src$.subscribe(console.log)
console.log('fin');
