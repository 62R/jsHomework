let game = {

    /**
     * Метод запускает игру.
     */
    run() {
        for (let i = 0; i < checker.questions.length; i++) {
            checker.askQuestion(i);
            const numberAnswer = checker.getAnswer();
            if (numberAnswer === null) {
                console.log(`Игра окончена Ваш счет ${player.score}`);
                return;
            }
            if (checker.checkAnswer(i, numberAnswer)) {
                player.upScore();
                console.log(`Правильный ответ! Ваш счет ${player.score}.`)
            } else {
                console.log(`Ваш ответ не верный. Правильный ответ: ${checker.questions[i].rightAnswer}. Ваш счет ${player.score}. Игра окончена.`);
                return;
            }
        }
        console.log(`Вы победили. Ваш счет ${player.score}.`);
    },

    /**
     * Метод выполняется при открытии страницы.
     */
    init() {
        console.log("Добро пожаловать! Для начала игры введите game.run() и нажмите Enter.");
    }
}

game.init();