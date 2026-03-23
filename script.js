const quotes = [
  "Healing is not about becoming someone new. It is about returning to yourself.",
  "You are allowed to grow slowly.",
  "Self discovery begins when you get quiet enough to hear yourself clearly.",
  "Rest can be part of healing too.",
  "You do not have to rush your becoming.",
  "There is wisdom in noticing what your heart has been carrying.",
  "You are allowed to meet yourself with gentleness.",
  "Growth often begins with honest reflection.",
  "You can learn new ways of caring for yourself.",
  "Your healing does not have to look like anyone else’s.",
  "Even small moments of self awareness can create deep change.",
  "You are still worthy on the days that feel heavy.",
  "Understanding yourself is a powerful form of care.",
  "It is okay to soften where you once had to stay guarded.",
  "You are allowed to take up space in your own life.",
  "Healing can begin with simply telling yourself the truth.",
  "The more you listen inward, the more clearly you can return to yourself.",
  "You do not need to have everything figured out to begin.",
  "Becoming more of yourself is enough.",
  "There is nothing weak about choosing to heal."
];

const quoteElement = document.getElementById("rotatingQuote");
let currentQuoteIndex = 0;

function showQuote(index) {
  quoteElement.classList.remove("visible");

  setTimeout(() => {
    quoteElement.textContent = quotes[index];
    quoteElement.classList.add("visible");
  }, 1400);
}

setInterval(() => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  showQuote(currentQuoteIndex);
}, 30000);