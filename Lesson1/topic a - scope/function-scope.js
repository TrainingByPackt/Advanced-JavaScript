// Function scope exercise
// Assignment: Create and call a function. In the function, define two
// additional functions call them at the end of the first function.
// Denote the three scopes with a console.log. Then using a single variable name, define three
// variables that are each scoped to different blocks. Assign different values to each and log the contents of each

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
// - Log the contents of each variable
