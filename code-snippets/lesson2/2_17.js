// Promise chain handles rejection and continues
// apiCall1 is a function that returns a rejected promise
// apiCall2 is a function that returns a resolved promise
// apiCall3 is a function that returns a resolved promise
// errorHandler1 is a function that returns a resolved promise
myPromse.then( apiCall1 ).then( apiCall2, errorHandler1 ).then( apiCall3 ).catch( errorHandler2 );
