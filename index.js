    const challenges = [
      "😂 Tell your funniest joke!",
      "🐔 Act like a chicken for 5 seconds!",
      "🤖 Talk like a robot!",
      "🦁 Roar like a lion!",
      "🕺 Do your silliest dance!",
      "🎤 Sing the ABC song in a funny voice!",
      "🐸 Make frog sounds!",
      "😜 Cross your eyes and make a silly face!",
      "🚶 Walk like a penguin for 10 seconds!",
      "🎭 Pretend you’re a superhero!"
    ];

    const challengeDiv = document.querySelector("#challenge");
    const playBtn = document.querySelector("#playBtn");
    const resetBtn = document.querySelector("#resetBtn");

    playBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      challengeDiv.textContent = challenges[randomIndex];
    });

    resetBtn.addEventListener("click", () => {
      challengeDiv.textContent = "👉 Your funny challenge will appear here!";
    });
  