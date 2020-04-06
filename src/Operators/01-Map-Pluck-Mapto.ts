import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

range(1, 5).pipe(
    map<number,number>(x => {
        console.log('map: ', x);
        return x * 10;
    })
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupmap$ = keyup$.pipe(
    map(key => key.code)
);
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupmap$.subscribe(code => console.log('map: ', code));
keyupPluck$.subscribe(code => console.log('pluck: ', code));
keyupMapTo$.subscribe(code => console.log('mapTo: ', code));
