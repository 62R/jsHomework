let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Ввудите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x:int, y:int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2: nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4: nextPosition.x--;
                break;
            case 6: nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8: nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        };

        //Проверят что точка находится в заданом поле, если она из него выходит меняет значения на предыдущие.
        if (!this.isInField(nextPosition)) {
            nextPosition.x = player.x;
            nextPosition.y = player.y;
        };

        return nextPosition;

    },

    /**
     * Функция проверяет что точка находится в области поля.
     * @param {{x:int, y:int}} point точка которую необходимо проверить.
     * @returns {boolean} Возвращает True если точка находится в заданной области и False если выходит за нее.
     */
    isInField(point) {
        if (point.x >= config.colsCount || point.x < 0) {
            return false;
        }

        if (point.y >= config.rowsCount || point.y < 0) {
            return false;
        }

        return true;
    },
}