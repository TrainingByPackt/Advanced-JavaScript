// Promise chain handles rejection and continues
// apiCall1 returns a rejected promise
myPromse.then( apiCall1 ).then( apiCall2 ).then( apiCall3 ).catch( errorHandler1 );
