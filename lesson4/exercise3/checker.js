let checker = {
    questions: [
        {
            question: 'Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?',
            answerOptions: ['Юнг', 'Гегель', 'Ницше', 'Шопенгауэр'],
            rightAnswer: 'Ницше',
        },
        {
            question: 'Сколько раз в сутки подзаводят куранты Спасской башни Кремля?',
            answerOptions: ['Один', 'Два', 'Три', 'Четыре'],
            rightAnswer: 'Два',
        },
        {
            question: 'Кто 1-м получил Нобелевскую премию по литературе?',
            answerOptions: ['Романист', 'Драматург', 'Поэт', 'Эссеист'],
            rightAnswer: 'Поэт',
        },
        {
            question: 'С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?',
            answerOptions: ['М', 'Н', 'О', 'П'],
            rightAnswer: 'М',
        },
        {
            question: 'Кто из перечисленных был пажом во времена Екатерины II?',
            answerOptions: ['Д.И. Фонвизин', 'Г.Р. Державин', 'А.Н. Радищев', 'Н.М. Карамзин'],
            rightAnswer: 'А.Н. Радищев',
        }
    ],

    /**
     * Функция выводит пользователю вопрос с вариантами ответов.
     * @param {int} numberQuestion Номер вопроса который нужно вывести.
     */
    askQuestion(numberQuestion) {
        console.log(`Вопрос: "${this.questions[numberQuestion].question}" \n Варианты ответов: \n A: ${this.questions[numberQuestion].answerOptions[0]} \n B: ${this.questions[numberQuestion].answerOptions[1]} \n C: ${this.questions[numberQuestion].answerOptions[2]} \n D: ${this.questions[numberQuestion].answerOptions[3]}`);
    },

    /**
     * Функция запрашивает у пользователя один из варинтов ответа.
     * @returns {string} возвращает один из вариантов.
     */
    getAnswer() {
        while (true) {
            let answer = prompt('Введите Ваш вариант ответа(A, B, C, D). Если хотите закончить игру нажмите "Отмена".');
            if (answer === null) {
                return null;
            }
            answer = answer.toLowerCase();
            if (!['a', 'b', 'c', 'd'].includes(answer)) {
                console.log('Выбирете один из чертырех вариантов: A, B, C, D');
                continue;
            }
            switch (answer) {
                case 'a':
                    return 0;
                case 'b':
                    return 1;
                case 'c':
                    return 2;
                case 'd':
                    return 3;
            }
        }
    },

    /**
     * Метод проверяет является ли вариант ответа верным для заданного вопроса.
     * @param {int} numberQuestion Номер вопроса, ответ на который необходимо проверить.
     * @param {int} numberAnswer Вариант ответа выбранный пользователем.
     * @returns {bool} True если вариант верный. False если не верный.
     */
    checkAnswer(numberQuestion, numberAnswer) {
        const userAnswer = this.questions[numberQuestion].answerOptions[numberAnswer];
        if (userAnswer === this.questions[numberQuestion].rightAnswer) {
            return true;
        } else {
            return false;
        }
    }

}