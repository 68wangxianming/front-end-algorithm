### 环境搭建
ES6、Jest、NPM、Git

### jest安装
https://jestjs.io/docs/zh-Hans/getting-started

#### 安装
```javascript
npm install --save-dev jest
npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env
```

编辑package.json
```js
{
    "scripts": {
        "test": "jest"
    }
}
```

编辑.babelrc
```js
{
    "presets": ["env", "react"]
}
```

#### 创建js文件

```js
function sum(a, b) {
    return a + b;
}
export default sum;
```

```js
import sum from './index'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

### 启动测试

```js
npm test
```


