// my example

function calc(a, b, callback) {
  return callback(a, b);

  function add(x, y) {
    const result = x + y;
    console.log(`Wynik dodawania ${x} i ${y} to ${result}`);
  }

  function odd(x, y) {
    const result = x - y;
    console.log(`Wynik odejmowania ${x} i ${y} to ${result}`);
  }

  function multiply(x, y) {
    const result = x * y;
    console.log(`Wynik mnożenia ${x} i ${y} to ${result}`);
  }
}

