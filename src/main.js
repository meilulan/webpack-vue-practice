import Vue from 'vue';
import './assets/common.scss';
import say from './util';
import { generateKeyPairSync } from 'crypto';

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