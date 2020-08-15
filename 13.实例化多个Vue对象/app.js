let one = new Vue({
    el: '#appOne',
    data: {
        title: 'App One Title!'
    }
});

let two = new Vue({
    el: '#appTwo',
    data: {
        title: 'App Two Title!',
    },
    methods: {
        ChangeAppOneTitle() {
            one.title = 'Change App One Title By App Two!';
        }
    }
});

two.title = 'MatueXL';