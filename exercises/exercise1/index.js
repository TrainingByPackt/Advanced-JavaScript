// Block scope exercise
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
