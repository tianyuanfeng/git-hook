// 设置一个求数字和的函数
const getSum = (arr) => {
    let sum = 0;
    arr.forEach(value => {
        sum += value;
    });

    return sum;
};
const arr = [1, 2, 3, 4];
const arrSum = getSum(arr);
console.log("结果为" + arrSum);