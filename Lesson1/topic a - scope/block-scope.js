// Block scope exercise

/*
Assignment:
You are writing an event handler function that reuses variable identifier names and therefore needs to take advantage of JavaScript block scope. Create a function with three distinct scope blocks, not including the global scope.
*/

// Solution
function fn1(){
  console.log('Scope 1');
  let scope = 5;
  console.log(scope);

  {
    console.log('Scope 2');
    let scope = 'different scope';
    console.log(scope);

  }

  {
    console.log('Scope 3');
    let scope = 'a third scope';
    console.log(scope);

  }

}

fn1();

// Hints:
// - Create a function
// - Add two new block scopes with the {} notation
// - The three scope blocks are the function's scope contained in the
// {}, and the two scopes just added with the {}
// - Create a variable in each scope block with the same name
// - Log the contents of each variable
