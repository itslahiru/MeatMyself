// App.js
import Vue from 'vue'
import main from './main'

export default new Vue({
    el: '#app',
    data: main.$data,
    methods: main.$methods
})
