import { fromEvent } from 'rxjs';

// eventos del DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: next => console.log('next: ', next)
};

src1$.subscribe( ({x, y}) => {
    console.log("clickeado: ", x, y);
});
src2$.subscribe(evento => {
    console.log('pulsado: ', evento.key);
});
