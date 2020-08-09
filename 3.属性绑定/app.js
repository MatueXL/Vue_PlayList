new Vue({
    el: '#app',
    data: {
        name: 'Gary',
        job: '时间浪费者',
        webSite: 'https://bilibili.com',
        webSiteTag: '<a href="https://bilibili.com">bilibili</a>'
    },
    methods: {
        Greet(time) {
            return `Good ${time} ${this.name}!`;
        }
    }
});

/**
 * el: element 标识要获取的元素，必须为根容易
 * data: 存储数据的对象
 * methods: 存储方法对象
 * data-binding: 给属性绑定值
 */