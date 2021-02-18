
let a = Math.random();           //生成0——1的随机数
a = a*10;                        //0——10的随机数
a = Math.ceil(a);

a % 2 == 0 && import(/* webpackChunkName: "async1" */'./common/async1');

a % 2 == 1 && import(/* webpackChunkName: "async2" */'./common/async2').then(module =>{
    let Async2 = module.default;
    new Async2('Async2 '+a);
});