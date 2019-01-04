// Promise chain - API functions return a promise
myPromse.then( apiCall1 ).then( apiCall2 ).then( apiCall3 ).catch( errorHandler );

async function asyncAwaitUse( myPromise ) {
  try{
    await myPromise;
    await apiCall1();
    await apiCall2();
    await apiCall3();
  } catch( err ){
    errorHandler( err );
  }
}
asyncAwaitUse( myPromise );
