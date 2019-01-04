'use strict';

function f1() { console.log( 'f1' ); }

function f2() { console.log( 'f2' ); }

function f3() {
  console.log( 'f3' );
  setTimeout( f5, 90 )
}

function f4() { console.log( 'f4' ); }

function f5() { console.log( 'f5' ); }

setTimeout( f1, 105 );
setTimeout( f2, 15 );
setTimeout( f3, 10 );
setTimeout( f4, 100 );

/* Expected program output:
f3
f2
f4
f5
f1
 */

/*

Expected stack, queue, and heap output

step 0
stack: <gobal>
queue: <empty>
heap: <empty>

step 1
stack: <gobal>, setTimeout( f1, 105 );
queue: <empty>
heap: <empty>

step 2
stack: <gobal>, setTimeout( f2, 15 );
queue: <empty>
heap: setTimeout( f1, 105 )

step 3
stack: <gobal>, setTimeout( f3, 10 );
queue: <empty>
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 )

step 4
stack: <gobal>, setTimeout( f4, 100 );
queue: <empty>
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 ), setTimeout( f3, 10 )

step 5
stack: <gobal>
queue: { event: timeout, handler: f3 }
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 ), setTimeout( f4, 100 )

step 6
stack: <gobal>, f3
queue: <empty>
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 ), setTimeout( f4, 100 )

step 7
stack: <gobal>, f3, console.log( 'f3' )
queue: <empty>
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 ), setTimeout( f4, 100 )

step 8
stack: <gobal>, f3, setTimeout( f5, 90)
queue: <empty>
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 ), setTimeout( f4, 100 )

step 9
stack: <gobal>, f3
queue: <empty>
heap: setTimeout( f1, 105 ), setTimeout( f2, 15 ), setTimeout( f4, 100 ), setTimeout( f5, 90)

 */

/* Hints
- Order the timeouts in order of event fire delay
- Two timeouts (f4 & f5) expire at the same ms offset, consider which event gets handled first (f4)?
 */