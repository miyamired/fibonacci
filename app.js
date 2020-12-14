'use strict';
const memo = new Map();

// n=0とn=1は決まっているものなので最初から入れておく
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  // メモにデータが有ればそれを使う
  if (memo.has(n)) {
    return memo.get(n);
  }
  // メモにデータがないので計算する
  const value = fib(n - 1) + fib(n - 2);
  // 計算したデータの保存
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log( i + "のフィボナッチ数は " + fib(i) +"です");
}