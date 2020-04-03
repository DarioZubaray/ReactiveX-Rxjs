import { Observable, Observer } from 'rxjs';

console.log('Hola ReactiveX!');

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    // No se ejecutan
    subs.next('Hola');
    subs.next('Mundo');
});

// obs$.subscribe( console.log );

// obs$.subscribe( 
//     valor => console.log('next: ', valor),
//     error => console.error(error),
//     () => console.info('completado')
//  );

const observador: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completado')
};

obs$.subscribe( observador );