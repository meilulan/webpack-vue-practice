<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <img src="./img/example.png" />
        <input type="text" v-model="msg" />
    </div>
</template>

<script>
import say from "./util";

export default {
    name: "app",
    data() {
        return {
            msg: "the first vue page"
        };
    },
    created() {
        this.getSay();
    },
    methods: {
        async getSay() {
            let what = await say();
            this.msg = what;
        }
    }
};
</script>

<style lang="scss">
#app {
    h1 {
        color: red;
    }
}
</style>

