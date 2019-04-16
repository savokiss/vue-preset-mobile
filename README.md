# Vue Project Preset Mobile
Vue 项目模板移动端 preset

## Usage

```bash
vue create --preset savokiss/vue-preset-mobile <project-name>
```

注意修改上面的 `<project-name>` 为要创建的文件夹名称

## Preset Config
[preset.json](./preset.json)

## Features
1. 集成`commitizen`规范提交message（中文提示信息），强制验证提交信息
2. 集成`standard-version`自动生成changelog
3. 使用`postcss-px-to-viewport`插件，vw适配移动端
4. 预设三个 env 环境和三个 build scripts
5. 使用`compression-webpack-plugin`进行资源 gzip 打包
6. 使用`vconsole-webpack-plugin`集成 vconsole，生产环境默认关闭
7. Service 层封装 axios
8. 模块化 Vuex Store