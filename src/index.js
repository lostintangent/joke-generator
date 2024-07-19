function generateJoke() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!"
  ];

  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

module.exports = {
  generateJoke
};
