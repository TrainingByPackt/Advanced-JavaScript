function createIterator( array ){
  let currentIndex = 0;
  return {
    next(){
      return currentIndex < array.length ?
        { value: array[ currentIndex++ ], done: false} :
        { done: true };
    }
  };
}
