let player = {
    score: 0,

    /**
     * Метод увеличивает счет игрока.
     */
    upScore() {
        if (this.score === 0) {
            this.score = 100;
        } else {
            this.score *= 2;
        }
    }
}