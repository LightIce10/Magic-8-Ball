// Event listener
document.getElementById("output").addEventListener("click", eightBallOutput);

// Function

function eightBallOutput() {
  let question = document.getElementById("question").value;
  let answer = document.getElementById("answer");
  let rand = Math.random();
  question = question.toLowerCase();
  if (
    question == "does the magic 8 ball actually work?" ||
    question == "is the magic 8 ball truthful?"
  ) {
    answer.innerHTML = "HOW DARE YOU DOUBT ME!!!";
    console.log(answer);
  } else if (
    question == "is javascript awesome?" ||
    question == "is javascript useful?"
  ) {
    answer.innerHTML = "Of Course it is!";
    console.log(answer);
  } else if (question == "are cats the best pet?") {
    answer.innerHTML = "ABSOLUTELY";
  } else if (!question.includes("?") || question == "") {
    answer.innerHTML =
      "Mr. Magic 8Ball cannot answer your question due to you missing one of the following <br/>  <p><ol><li>No Question asked</li><li>Missing a Question mark</li></ol></p>";
  } else if (question == "am i loved?" || question == "do people love me?") {
    answer.innerHTML = "Yes, without a doubt yes";
  } else {
    if (rand < 0.1) {
      answer.innerHTML = "Without a Doubt";
    } else if (rand < 0.2) {
      answer.innerHTML = "As I see it, yes";
    } else if (rand < 0.3) {
      answer.innerHTML = "Concentrate and ask again";
    } else if (rand < 0.4) {
      answer.innerHTML = "Don't count on it";
    } else if (rand < 0.5) {
      answer.innerHTML = "Outlook not so good";
    } else if (rand < 0.6) {
      answer.innerHTML = "As I see it, no";
    } else if (rand < 0.7) {
      answer.innerHTML = " 100% yes, wait no, 1000% yes";
    } else if (rand < 0.8) {
      answer.innerHTML = "Definetely not";
    } else if (rand < 0.9) {
      answer.innerHTML = "Definetly yes";
    } else {
      answer.innerHTML = "you should work to it";
    }
  }
}
