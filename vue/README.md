visibility:hidden、display:none和vue的v-if、v-show区别

vue生命周期：vue实例创建(beforeCreate)->初始化数据(created)->编译模板(beforeMount)->渲染页面(mounted)，更新(beforeUpdate)->重新渲染(updated)，(beforeDestroy)销毁(destroyed)

<span v-once>这个将不会改变: {{ msg }}</span> 表示span标签内的插值不在更新

标签的attribute永远小写，比如<my-com Title="123"></my-com>组件的Title会转换成title，因此接收的时候必须用小写的title接收

readonly和disabled这类attribute可以通过v-bind:disabled="true"来进行绑定

vue变量命名不能用"短线-"命名法

v-bind、v-on都可以用动态参数

计算属性可以进行缓存，也就是当值不改变时，不重新计算，而是返回上一次计算的缓存值

计算属性设置截取器截获变量。监听属性监设置监听器，监听属性监听变量。两者用法不同，计算属性支持异步，监听属性支持异步操作。

组件的根标签也会真实渲染，组件的属性全部会加入到组件根标签上，出现非class，style重复属性，直接替换，class、style属性合并

style绑定中，若css属性值为数组，则数组后面元素的优先级高

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染，方法是Diff算法，若为每一个标签都绑定key，则重新生成新的标签，而不高效复用

vue会将相同标签名的标签进行高效复用

当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，不应该将v-for和v-if混用

v-for可以用数组和对象，数组则返回值和下标，对象则返回值、键名、下标

数组变更方法会引起数组响应变化，而非变更方法则无法响应变化，push、pop、shift、unshift、splice、sort、reverse是变更方法，filter、concat、slice是非变更方法

重新对数组赋值是响应式的

事件修饰符：stop、prevent、capture、self、once、passive

按键修饰符：enter、tab、delete、esc、space、up、down、left、right

按键修饰符的keyCode用法已经被废弃了，可能不再被最新浏览器支持。可以使用key用法

系统修饰键：ctrl、alt、shift、meta，先按下系统修饰键，才会触发后面的事件

.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件，也即加上exact，仅有特定系统修饰键时，事件才会触发

鼠标按钮修饰符：left、right、middle，原生js通过event.button等于数组[0,1,2]其中一个值来判断左右中键，从左到右值分别为：0、1、2

v-model 会忽略所有表单元素的 value、checked、selected 的初始值而总是将 Vue 实例的数据作为数据来源

v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
text 和 textarea 元素使用 value property 和 input 事件；
checkbox 和 radio 使用 checked property 和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。

v-model的修饰符：lazy(input触发改为change触发)、number(默认为string，改为number类型)、trim

组件定义的props属性实际就是标签的属性，默认组件添加的属性会加到组件的根标签上

this.$emit触发一个事件，this.$on监听当前实例的事件

父传子值：用props，子传父值用$emit和on，其他传值通过在vue实例bus上用$emit和$on来传值

在组件上使用v-model，为了让它正常工作，这个组件内的 <input> 必须：
将其 value attribute 绑定到一个名叫 value 的 prop 上
在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出

<component v-bind:is="componentName"></component>，componentName可以是已注册组件的名字，或
一个组件的选项对象。请留意，这个 attribute 可以用于常规 HTML 元素，但这些元素将被视为组件，这意味着所有的 attribute 都会作为 DOM attribute 被绑定。对于像 value 这样的 property，若想让其如预期般工作，你需要使用 .prop 修饰器。

.prop修饰符将组件上绑定的属性作为组件的props，而不是作为组件根标签的属性

在vue中，若组件上绑定的属性在组件的props上没有，则默认绑定到组件根标签，作为组件根标签的属性

有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部。这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：
```javascript
//blog-post-row不能出现在table中
<table>
  <blog-post-row></blog-post-row> 
</table>

//解决办法
<table>
  <tr is="blog-post-row"></tr>
</table>

/*
需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：
字符串 (例如：template: '...')
单文件组件 (.vue)
<script type="text/x-template">
/*
```

组件名词为"短线-"型只由"短线-"型调用，而驼峰命名法可以用"短线-"型只由"短线-"型或驼峰命名法调用

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名，重申一次，如果你使用字符串模板等，那么这个限制就不存在了。

props写法：
```
props: ['a','b']

props: {
    a: String,
    b: Number
}

props: {
    a: {
        type: String
    },
    b: {
        type: Number
    }
}

```

props会根据父组件变化让子组件响应变化，因此子组件不应该改动props值，只能读操作，因为你修改了props的值，等父组件更新了，props又修改了，如果我们真需要操作props可以使用计算属性

props的default属性可以是值也可以是函数，该函数返回一个值

当prop验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

注意那些prop会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的

props的type还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认。例如，给定下列现成的构造函数：
```javascript
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
// 你可以使用：
Vue.component('blog-post', {
  props: {
    author: Person
  }
})
//来验证 author prop 的值是否是通过 new Person 创建的。
```

如果你不希望组件的根元素继承组件传来的attribute，你可以在组件的选项中设置inheritAttrs: false。例如：
```
Vue.component('my-component', {
  inheritAttrs: false,
  // ...
})
```

然后通过$attr对象(键名是组件传来的参数名，键值则是组件传来的参数值)来自定义组件传来的参数绑定到组件内部哪个标签上，也即Vue文档解释的：有了inheritAttrs: false 和$attrs，你就可以手动决定这些attribute会被赋予哪个元素，但是要注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。




