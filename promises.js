function flipCoin() {
  return new Promise((resolve, reject) => {
    const outcome = Math.random() > 0.5 ? "heads" : "tails";
    if (outcome === "heads") {
      return fetchAdvice().then((response) => {
        const advice = response.slip.advice;
        resolve({
          data: advice,
          message: "You spun heads and here is a piece of advice :)",
        });
      });
    } else {
      return fetchJoke().then((response) => {
        debugger;
        const joke = response.setup + " " + response.punchline;
        resolve({
          data: joke,
          message: "You spun tails and here is a joke :)",
        });
      });
    }
  });
}

function fetchJoke() {
  return fetch("https://official-joke-api.appspot.com/random_joke").then(
    (response) => response.json()
  );
}

function fetchAdvice() {
  return fetch("http://api.adviceslip.com/advice").then((response) =>
    response.json()
  );
}
