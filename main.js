const readlineSync =require('readline-sync')

console.log("Salut, bienvenue dans ma super pyramide ! ");

let x = parseInt(
  readlineSync.question(" Combien d'étages veux-tu ?> 5  et < 25 : ")
);

function drawPyramide(a) {
  console.log("Voici la pyramide :");
  for (let i = 1; i <= a; i++) {
    let space = " ";
    let string = "#";
    let res = "";
    let rep = i + (i - 1);
    res = space.repeat(a - i) + string.repeat(rep) + space.repeat(a - i);
    console.log(res);
  }
}

if (x > 5 && x < 25) {
  drawPyramide(x);
} else {
  console.log("vérifier le nombre d'étage");
}