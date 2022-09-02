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
  let where = who.concat(what);

  let why = where.concat(when);

  return GenerateRandom(why);
}

function GenerateRandom(why) {
  return why[Math.floor(Math.random() * why.length)];
}

document.getElementById("excuse").innerHTML = onLoad(who, what, when);
