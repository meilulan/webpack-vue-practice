import Vue from 'vue';
import App from './App.vue'
import './assets/common.scss';

const vue = new Vue({
    el: "#app",
    components: { App },
    template: '<App/>'
});