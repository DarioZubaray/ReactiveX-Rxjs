import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';


const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);
