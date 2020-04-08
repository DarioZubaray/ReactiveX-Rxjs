import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({x, y}) => ({x,y})),
    tap( val => console.log('tap', tap)),
    auditTime(2000)
).subscribe(console.log);
