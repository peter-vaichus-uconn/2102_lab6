// controller/ScoreController.js
class ScoreController {
    constructor() {
        this.score = 0;
        this.count = 0;
    }

    incrementScore() {
        this.score += 1;
        this.count += 1;
        return { score: this.score, count: this.count };
    }

    dontIncrementScore() {
        this.count += 1;
        return { score: this.score, count: this.count };
    }

    getScore() {
        return this.score;
    }

    getCount() {
        return this.count;
    }

    reset() {
        this.score = 0;
        this.count = 0;
    }
}

export default new ScoreController();
