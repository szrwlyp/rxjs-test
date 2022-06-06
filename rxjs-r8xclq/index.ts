import './style.css';

import { of, map, Observable, fromEvent, throttleTime, scan } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

let button = document.querySelector('button');
fromEvent(button, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe(console.log);

// Open the console in the bottom right to see results.
