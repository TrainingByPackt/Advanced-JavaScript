// Block scope exercise

// Assignment: Create and call a function. In the function create two
// additional scope blocks and identify the three scopes with a console.log
// Then, using a single variable name, define three variables that are
// each scoped to different blocks. Assign different values to each and log the contents of each

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
    let scope = 'a third scope5';
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
