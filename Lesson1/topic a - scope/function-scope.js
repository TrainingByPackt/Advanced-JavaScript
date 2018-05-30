// Function scope exercise

/*
Assignment:
Create a function that contains three distinct function scope blocks, not including the global scope.
In each scope block:
- Log which block we are in (ie block 1, block 2, or block 3)
- Show that variable names can be redefined in each scope block
- Assign a different value for each block
- Log the new value
*/

// Solution
function fn1(){

  console.log('Scope 1');
  let scope = 5;
  console.log(scope);

  fn2();
  fn3();

  function fn2(){
    console.log('Scope 2');
    let scope = 'different scope';
    console.log(scope);

  }

  function fn3(){
    console.log('Scope 3');
    let scope = 'a third scope';
    console.log(scope);

  }

}

fn1();

// Hints:
// - Create a function
// - Define and call two new functions inside that function
// - The three scope blocks are the original function's scope contained in the
// {}, and the two scopes inside {} of the two new functions
// - Create a variable in each scope block with the same name
// - Assign different values to each variable
// - Log the contents of each variable
