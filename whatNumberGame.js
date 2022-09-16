const number = Number.parseInt(Math.random() * (100 - 1) + 1);
let counter = 0;
do {
  counter += 1;
  userNumber = Number(prompt("Podaj liczbę od 1 do 100"));

  if (userNumber === number) {
    console.log(`Brawo - wygrałeś! 
    Szukaną liczbą było ${number}.
    Liczba prób odgadnięcia wynosi ${counter}`);
  } else if (userNumber > number) {
    console.log("Twoja liczba jest za duża");
  } else {
    console.log("Twoja liczba jest za mała");
  }
} while (userNumber !== number);
