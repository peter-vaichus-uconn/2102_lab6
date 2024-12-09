class MyState {
    my_score = 0; // Initialize directly
    my_count = 0; // Initialize directly

    getScore() {
        return this.my_score;
    }

    getCount() {
        return this.my_count;
    }

    updateScore(score) {
        this.my_score = score;
    }

    updateCount(count) {
        this.my_count = count;
    }
}

export default MyState;
