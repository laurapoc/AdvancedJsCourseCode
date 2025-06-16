const showNumberTrivia = async () => {
  const BASE_URL = "http://numbersapi.com";

  const result = await fetch(`${BASE_URL}/random/trivia?json`);
  console.log("result", result);
};

const showNumberRace = () => {
  Promise.race([
    fetch("http://numbersapi.com/random/1?json"),
    fetch("http://numbersapi.com/random/2?json"),
    fetch("http://numbersapi.com/random/3?json"),
  ])
    .then((winner) => {
      console.log("winner", winner);
      return winner.json();
    })
    .catch((e) => {
      console.log("Error fetching showNumberRace:", e);
    });
};

const showNumberAll = async () => {
  const results = await Promise.allSettled([
    fetch("http://numbersapi.com/random/1?json"),
    fetch("http://nope.nope"), // This will cause an error
    fetch("http://numbersapi.com/random/3?json"),
  ]);

  console.log("results", results);  

  const success = results.filter((r) => r.status === "fulfilled");
  const failure = results.filter((r) => r.status === "rejected");

  console.log("Successes:", success);
  console.log("Failures:", failure);
};

showNumberTrivia();
showNumberRace()
showNumberAll();
