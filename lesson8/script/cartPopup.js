'use strict'

const cartLink = document.querySelector('.main-nav__link_type_cart'); //находим кнопку корзины
const addToCartBtns = document.querySelectorAll('.product-list__overlay-button'); //находим все кнопки добавления в кознину
const cartPopup = document.querySelector('.main-nav__cart-popup'); //находим див который будет высплывать
const cartPopupTable = cartPopup.querySelector('tbody');


const cart = {
    productList: {
    },
    totalCount: null,

    /**
     * Метод добовляет товар в корзину.
     * @param {event} event
     * @returns 
     */
    addToCart(event) {
        this.upTotalCount();
        const productName = event.target.dataset.productName;


        if (this.isProductInCart(productName)) {
            this.productList[productName].count++;
            return;
        }

        this.productList[productName] = { price: +event.target.dataset.productPrice, count: 1 };
    },

    /**
     * Метод проверяет есть ли товар в корзине.
     * @param {string} productName Имя товара
     * @returns {boolean} 
     */
    isProductInCart(productName) {
        if (productName in this.productList) {
            return true;
        }
        return false;
    },

    /**
     * Метод увеличивает общий счетчик товаров в корзине.
     */
    upTotalCount() {
        this.totalCount++;
        cartLink.querySelector('span').innerText = this.totalCount;
    },

    /**
     * Метод отрисовывает таблицу с товарами в корзине в HTML разметке. 
     * @returns 
     */
    render() {
        if (this.totalCount == null) {
            return;
        }

        let totalPrice = null;
        let table = '';

        for (let product in this.productList) {
            totalPrice += this.productList[product].price * this.productList[product].count;
            table += `
                    <tr>
                        <td>${product}</td>
                        <td>$${this.productList[product].price}</td>
                        <td>${this.productList[product].count}шт.</td>
                        <td>$${this.productList[product].price * this.productList[product].count}</td>
                    </tr>
            `;
        }

        table += ` 
                <tr class = "main-nav__cart-popup-table-total">
                    <td colspan="4">Товаров в корзине на сумму: <span>$${totalPrice}</span></td>
                </tr>
        `;
        cartPopupTable.innerHTML = table;

        cartPopup.classList.add('main-nav__cart-popup_type_active');
    },

    /**
     * Метод скрывает HTML заметку.
     */
    hide() {
        cartPopup.classList.remove('main-nav__cart-popup_type_active');
    }

}


// Добавляем прослушивание события клика для всех кнопок добавить в корзину.
addToCartBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        cart.addToCart(event);
    });
});

// Добовляем прослушивание событий наведения на корзину. Показываем товары когда навелись и скрываем когда убрали.
cartLink.addEventListener('mouseover', cart.render.bind(cart));
cartLink.addEventListener('mouseout', cart.hide);






