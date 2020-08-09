new Vue({
    el: '#app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        // 修改age参数
        Add(inc) {
            this.age += inc;
        },
        // 获取属性X,Y轴偏移量
        UpdateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

/**
 * el: element 标识要获取的元素，必须为根容易
 * data: 存储数据的对象
 * methods: 存储方法对象
 * data-binding: 给属性绑定值
 * v-html: 将其渲染成html标签
 * 在文本内调用方法必须加括号，在属性内调用方法可以不加，统一最好都加上括号！
 * 属性内的方法不加括号会自动获取到event参数，加了就要显示声明$event实参
 */