# 示例页面生成器

## vue项目的常规操作
```
yarn install

yarn serve
```
这样基本上可以看到现有系统包含的一些界面

## 如何整合到现有的系统

首先安装用来生成代码的plop
```
yarn add -D plop
```

创建plopfile.js，并设置plop的配置文件
```
const viewGenerator = require('./plop-templates/view/prompt')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
}

```

创建模板文件，创建plop-templates文件夹，并在里面创建文件

先创建一级目录，如view，下面创建两个文件，index.hbs和prompt.js文件

index.hbs
```
{{#if template}}
<template>
  <div />
</template>
{{/if}}

{{#if script}}
<script>
export default {
  name: '{{ properCase name }}',
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
{{/if}}

{{#if style}}
<style lang="scss" scoped>

</style>
{{/if}}
```
prompt.js
```
const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'view name please',
    validate: notEmpty('name')
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: '<template>',
      value: 'template',
      checked: true
    },
    {
      name: '<script>',
      value: 'script',
      checked: true
    },
    {
      name: 'style',
      value: 'style',
      checked: true
    }
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'View require at least a <script> or <template> tag.'
      }
      return true
    }
  }
  ],
  actions: data => {
    const name = '{{name}}'
    const actions = [{
      type: 'add',
      path: `src/views/${name}/index.vue`,
      templateFile: 'plop-templates/view/index.hbs',
      data: {
        name: name,
        template: data.blocks.includes('template'),
        script: data.blocks.includes('script'),
        style: data.blocks.includes('style')
      }
    }]

    return actions
  }
}
```
其中创建了utils.js，里面加了一个针对必填项的封装函数
```
exports.notEmpty = name => v => !v || v.trim() === '' ? `${name} is required` : true
```