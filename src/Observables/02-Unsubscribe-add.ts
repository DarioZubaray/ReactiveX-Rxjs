import { Observable, Observer, Subscriber } from 'rxjs';

const observador: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    // crear un intervalo 1,2,3,4,5,6,7,8,9

    let numero = 1;
    const interval = setInterval( () => {
        subscriber.next(numero);
        console.log('Emitiendo numero: ', numero);
        numero++;
    }, 1000);

    const subsComplete = setInterval( () => {
        console.log('subscriber complete');
        subscriber.complete();
    }, 3500);

    return () => {
        clearInterval(interval);
        clearInterval(subsComplete);
        console.info('Intervalo destruido');
    }
});

const subscription1 = intervalo$.subscribe(observador);
const subscription2 = intervalo$.subscribe(observador);
const subscription3 = intervalo$.subscribe(observador);

// Terminar observables en cadena
subscription1.add( subscription2 ).add( subscription3 );

setTimeout( () => {
    console.log('Unsubcribe');
    subscription1.unsubscribe();
}, 7000);
