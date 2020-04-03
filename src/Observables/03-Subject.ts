import { Observable, Observer, Subscriber, Subject } from 'rxjs';

const observador: Observer<any> = {
    next: value => console.log('siguiente: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subs => {

    const intervalId = setInterval( () => {
        subs.next(1 + Math.floor((5000 - 1) * Math.random()))
    }, 1000);

    return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido');
    }
});


// const sub1 = intervalo$.subscribe( value => console.log('subs1: ', value) );
// const sub2 = intervalo$.subscribe( value => console.log('subs2: ', value) );

/**
 * SUBJECT
 * 1- casteo multiple
 * 2- tambien es un observer
 * 3- next, error y complete
 */

const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const sub1 = subject$.subscribe(observador);
const sub2 = subject$.subscribe(observador);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
