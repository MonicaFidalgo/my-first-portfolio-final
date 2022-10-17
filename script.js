/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

const display = document.getElementById("motivato");

const motivation = [
  {
    quote: "Planting popcorn does not produce more popcorn",
    person: "Farmer Ted",
  },
  {
    quote: "White whale, bad whale",
    person: "Confucious (Moby Dick)",
  },
  {
    quote: "Use the strobe function to disorientate your attacker",
    person: "Flashlight",
  },
  {
    quote: "Apply liberally to your erogenous zones",
    person: "Spice Bomb",
  },
  {
    quote: "Help me, I'm bleaching",
    person: "The Great Barrier Reef",
  },
];

function motivateMe() {
  const listLength = motivation.length;
  const randVal = motivation[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<blockquote>"${randVal.quote}"</blockquote><cite>${randVal.person}</cite>`;
}

motivateMe();

var changeThemeButton = document.querySelector("#change-theme");

changeThemeButton.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
  console.log(document.body.classList.contains("dark-theme"));
});
