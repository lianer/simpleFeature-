# simpleFeature-

这个项目主要存放一些功能函数

## substr.js

字符串切割

```js
substr('南拳的妈妈1992', 4)     // => 南拳的妈...

substr('imlianer.com', 4)     // => imlianer...

substr('倒霉熊1992', 4)        // => 倒霉熊19...

substr('小红', 4)              // => 小红

```

## parseQuery.js

解析url中的查询参数

```js
parseQuery('appid=123456').appid  // => 123456

parseQuery('?sex=1&age=23&married')  // => { sex: '1', age: '23', married: '' }

parseQuery('http://localhost/feature/parsequery?from=news&to=home', 'from')  // => news

parseQuery('/path?query=123#!/path/to/spa', 'query')  // => 123
```

## algoAge.js

根据生日计算年龄

```js
// 假设现在是2016-08-04
age=algoAge(1992, 12, 31)  // => 23

// 无效的生日，返回 -1
age=algoAge(1991, 0, 0)    // => -1
```

## fixedFloat

保留 n 位小数

```js
fixedFloat(123.456, 2)  // 123.46
fixedFloat(-3.005, 2)   // -3.00
fixedFloat(3.005, 2)    // 3.01
fixedFloat(3.015, 2)    // 3.02
fixedFloat(3, 2)        // 3.00
fixedFloat(0.1, 2)      // 0.10
fixedFloat(0.01, 2)     // 0.01
fixedFloat(0, 2)        // 0.00
fixedFloat(, 2)         // NaN
fixedFloat(null, 2)     // NaN
fixedFloat({}, 2)       // NaN
fixedFloat('a', 2)      // NaN
```
