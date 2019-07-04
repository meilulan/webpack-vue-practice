import Vue from 'vue';
import './assets/common.scss';
import say from './util';

say();

const vue = new Vue({
    el: "#app",
    data: {
        message:"hello webpack-vue"
    }
});