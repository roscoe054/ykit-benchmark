# ykit-benchmark

Ykit(v0.5.5) 和 Webpack(v3.5.1) 构建时间对比。

## 测试结果:

本地起 server 时，访问页面资源加载和页面渲染时间：

| 测试项目 | Webpack 耗时 | Ykit 耗时 |
|---------|-------|-------|
| demo1(3 assets) | 9s | 5s |
| demo2(10 assets) | 18s | 5s |
| demo3(20 assets) | 33s | 5s |

build（包含压缩）时间：

| 测试项目 | Webpack 耗时 | Ykit 耗时 |
|---------|-------|-------|
| demo1(3 assets) | 10s | 7s |
| demo2(10 assets) | 20s | 16s |
| demo3(20 assets) | 38s | 32s |

## 如何运行:

- 进入到 demo 目录下
- npm install

### 测试本地服务首次启动时间

webpack:
- 在 demo 目录中 npm run dev-webpack
- 访问 http://localhost:3000/html/view1.html

ykit:
- 在 demo 目录中 npm run dev-ykit
- 访问 http://localhost:3000/html/view1.html

### 测试 build 时间

webpack:
- 在 demo 目录中 npm run build-webpack

ykit:
- 在 demo 目录中 npm run build-ykit
