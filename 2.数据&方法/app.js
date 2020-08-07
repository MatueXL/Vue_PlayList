new Vue({
    el: '#app',
    data: {
        name: 'Gary',
        job: '时间浪费者'
    },
    methods:{
        Greet(time){
            return `Good ${time} ${this.name}!`;
        }
    }
});

/**
 * el: element 标识要获取的元素，必须为根容易
 * data: 存储数据的对象
 */