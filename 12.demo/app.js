new Vue({
    el: '#app',
    data: {
        ageSize: 0,
        ended: false,
    },
    methods: {
        addAge() {
            this.ageSize += 10;

            if (this.ageSize === 100) {
                this.ended = true;
            }
        },
        restart() {
            this.ageSize = 0;
            this.ended = false;
        }
    }
})