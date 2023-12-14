class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.losses = 0;
  }

  incrementWins() {
    this.wins++;
  }

  incrementLosses() {
    this.losses++;
  }
  guessLetter(letter) {
    if (this.currentMatch) {
      this.currentMatch.guessLetter(this, letter);
    }
  }

  guessWord(word) {
    if (this.currentMatch) {
      this.currentMatch.guessWord(this, word);
    }
  }

  increaseScore(matchScore) {
    this.score += matchScore;
  }

  getOverallScore() {
    return this.score;
  }
}

module.exports = { Player };
