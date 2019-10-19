import { fromEvent,interval} from 'rxjs';
import { scan,pluck,groupBy } from 'rxjs/operators';

// fromEvent(document, 'click')
//   .pipe(scan(count => count + 1, 0))
//   .subscribe(count => console.log(`Clicked ${count} times`));



//const { interval } = Rx;
//const { scan, pluck, groupBy } = RxOperators;

interval(1000).pipe(
  scan(
    ({ secondLast, last }) => ({
      secondLast: last,
      last: last + secondLast
    }),
    { secondLast: 0, last: 1 }
  ),
  pluck("secondLast"),
  groupBy(n => Math.floor(Math.log10(n)))
)
