Vue.component('greeting', {
    template:
        `
    <div>
        <p>{{greet}}，给大家说段相声！</p>
        <button @click='ChangeGreet'>改欢迎词</button>
    </div>
    `,
    data() {
        return {
            greet: '大家好',
        }
    },
    methods: {
        ChangeGreet() {
            this.greet = '大家晚上好';
        }
    }
})

/**
 * 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立拷贝
 */

new Vue({
    el: '#appOne',
})

new Vue({
    el: '#appTwo',
})