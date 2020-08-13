new Vue({
    el: '#app',
    data: {
        showColor: false,
        showLength: false,
    },
    methods: {
        classObj() {
            return {
                colorClass: this.showColor,
                lengthClass: this.showLength,
            };
        }
    }
});