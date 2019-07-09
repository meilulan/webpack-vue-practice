import Vue from 'vue';
import './assets/common.scss';
import say from './util';
import { generateKeyPairSync } from 'crypto';

Vue.component('my-pic', {
    template: '<img :src="url" />',
    data() {
        return {
            url: require('./img/example.png')
        }
    }
});

const vue = new Vue({
    el: "#app",
    data: {
        message: "hello webpack-vue"
    },
    created() {
        this.getSay();
    },
    methods: {
        async getSay() {
            let data = await say();
            this.message = data;
        }
    }
});