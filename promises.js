function flipCoin() {
  return new Promise(async (resolve, reject) => {
    const outcome = Math.random() > 0.5 ? "heads" : "tails";
    if (outcome === "heads") {
      const response = await fetchAdvice();
      const advice = response.slip.advice;
      resolve({
        data: advice,
        message: "You spun heads and here is a piece of advice :)",
      });
    } else {
      const response = await fetchJoke();
      const joke = response.setup + " " + response.punchline;
      resolve({
        data: joke,
        message: "You spun tails and here is a joke :)",
      });
    }
  });
}
const fetchJoke = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  return response.json();
};

const fetchAdvice = async () => {
  const response = await fetch("http://api.adviceslip.com/advice");
  return response.json();
};
