// main.js
import Vue from 'vue'

export default new Vue({
    data: {
        quantity: 69
    },
    methods: {
        decreaseQuantity() {
            if (this.quantity > 0) {
                this.quantity--
            }
        },
        increaseQuantity() {
            this.quantity++
        }
    }
})
