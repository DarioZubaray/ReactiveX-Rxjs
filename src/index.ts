import { Observable } from 'rxjs';

console.log('Hola Mundo!');

// const obs$ = Observable.create();

const obs$ = new Observable( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

});

obs$.subscribe( console.log );
