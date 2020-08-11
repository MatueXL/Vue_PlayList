new Vue({
    el: '#app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        LogMyName() {
            this.name = this.$refs.nameR.value;
        },
        LogMyAge() {
            this.age = this.$refs.ageR.value;
        }
    }
});