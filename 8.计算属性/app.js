new Vue({
    el: '#app',
    data: {
        a: 100,
        b: 100,
        age: 25
    },
    computed: {
        AddToA() {
            console.log('AddToA');
            return this.age + this.a;
        },
        AddToB() {
            console.log('AddToB');
            return this.age + this.b;
        },
    },
    methods: {
        // AddToA() {
        //     console.log('AddToA');
        //     return this.age + this.a;
        // },
        // AddToB() {
        //     console.log('AddToB');
        //     return this.age + this.b;
        // },
        // AddToC() {
        //     console.log('AddToC');
        // },
    }
});