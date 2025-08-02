const usernameInput = document.getElementById('username');
const storyOutput = document.getElementById('story');
const generateBtn = document.getElementById('generate');

const characters = [
  "a sneezing dragon named Puff",
  "a detective penguin called Waddles",
  "a cloud that tells terrible jokes",
  "a pirate who’s afraid of water",
  "a turtle with roller skates"
];

const settings = [
  "atop a wobbly mountain",
  "inside a jellybean spaceship",
  "in a city made entirely of cheese",
  "on a floating island of marshmallows",
  "beneath the ocean in a disco cave"
];

const problems = [
  "lost their map to the treasure",
  "accidentally turned the mayor into a goldfish",
  "pressed a button that made everything invisible",
  "started a tickle war that got out of control",
  "spilled magical glitter everywhere"
];

const actions = [
  "They tried to fix it using duct tape and spaghetti.",
  "A talking banana gave them strange advice.",
  "They formed a plan involving bubblegum and jazz music.",
  "The local jelly wizard offered help, but only in riddles.",
  "They built a rocket powered by laughter."
];

const twists = [
  "Suddenly, everything turned upside down — literally!",
  "A mysterious goat appeared and shouted ‘Plot twist!’",
  "Time reversed for five minutes, and everyone danced backwards.",
  "A rainbow opened a secret portal to Homework Land.",
  "It started raining pickles from the sky."
];

const endings = [
  "In the end, they learned that mistakes make the best memories.",
  "They celebrated with a nap and 47 scoops of ice cream.",
  "Everyone laughed, even the grumpy moon.",
  "They became legends, known throughout the silly universe.",
  "And from then on, Thursdays were known as Chaos Day."
];

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
  const name = usernameInput.value.trim() || "Jamie";
  const character = getRandom(characters);
  const setting = getRandom(settings);
  const problem = getRandom(problems);
  const action = getRandom(actions);
  const twist = getRandom(twists);
  const ending = getRandom(endings);

  const story = `${name} once met ${character} ${setting}. They quickly became friends, but soon ${problem}. ${action} ${twist} ${ending}`;

  storyOutput.textContent = story;
  storyOutput.classList.remove('hidden');
}

generateBtn.addEventListener('click', generateStory);
