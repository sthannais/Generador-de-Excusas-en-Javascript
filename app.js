let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function onLoad(who, what, when) {
  let generateLetterAleatory = GenerateRandom(who);
  let generateLetterAleatory2 = GenerateRandom(what);
  let generateLetterAleatory3 = GenerateRandom(when);

  return (
    generateLetterAleatory +
    " " +
    generateLetterAleatory2 +
    " " +
    generateLetterAleatory3
  );
}

function GenerateRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("excuse").innerHTML = onLoad(who, what, when);
