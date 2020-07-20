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

然后通过$attrs对象(键名是组件传来的参数名，键值则是组件传来的参数值)来自定义组件传来的参数绑定到组件内部哪个标签上，也即Vue文档解释的：有了inheritAttrs: false 和$attrs，你就可以手动决定这些attribute会被赋予哪个元素，但是要注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。

this.$emit("update:title",data) => on:update:title

给组件传入props，用.sync给组件自动绑定一个update事件用来改变父组件传入的props值，我们仅需要手动在子组件触发$emit(update:需要改变的props名,data)即可。注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的 property 名，类似 v-model。

当我们用一个对象同时设置多个 prop 的时候，也可以将这个 .sync 修饰符和 v-bind 配合使用：<text-document v-bind.sync="doc"></text-document>。但是将v-bind.sync用在一个字面量的对象上，例如v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。

父组件引入子组件，子组件不能访问子组件内部，作用域是在父组件

有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。<slot>Submit</slot>

在子组件内部定义具名插槽<slot name="header"></slot>，默认插槽名为default

在向具名插槽提供内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称<template v-slot:header>
<h1>Here might be a page title</h1></template>

注意 v-slot 只能添加在 <template> 上 (只有一种例外情况：具名插槽只有默认插槽时)

作用域插槽，当我们想在父组件访问子组件内部时，可以在子组件内部定义作用域插槽，定义方法：<slot v-bind:user="user"></slot>，在父组件使用方法：<template v-slot:default="slotProps"></template>，slotProps是子组件插槽上绑定数据的集合对象，可以这样引用slotProps.user

在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：<current-user v-slot:default="slotProps"></current-user>，这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 v-slot 被假定对应默认插槽<current-user v-slot="slotProps"></current-user>，只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法

动态插槽名<template v-slot:[dynamicSlotName]></template>

v-slot:header 可以被重写为 #header

<keep-alive><component v-bind:is="currentTabComponent"></component></keep-alive>可以让组件进行缓存

Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。如：
```javascript
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```

你也可以在工厂函数中返回一个 Promise，所以把 webpack 2 和 ES2015 语法加在一起，我们可以这样使用动态导入：
```javascript
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
// 当使用局部注册的时候，你也可以直接提供一个返回 Promise 的函数：
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})

//使用require动态导入
new Vue({
  // ...
  components: {
    'my-component': resolve => require(['../components/second.vue'], resolve)

  }
})
```

当你首次加载某一个组件的资源时（可以将网速调为 slow 3g，效果更明显），就会显示你在loading组件的内容，而当超出超时时间仍未加载完成该组件时，那么将显示error组件的内容（建议error组件尽量简单，因为当处于低速网络或者断网情况下时，error组件内的图片资源等有可能出现无法加载的问题）,加载完成时显示component组件的内容
```javascript
//这里的异步组件工厂函数也可以返回一个如下格式的对象：
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

处理边界情况，利用$root访问根实例，用$parent访问父组件实例，同样也可以通过在父组件上对子组件绑定ref，然后通过$refs实现父组件访问子组件内部

当 ref 和 v-for 一起使用的时候，你得到的 ref 将会是一个包含了对应数据源的这些子组件的数组。注意$refs只有在渲染页面完成之后才能访问，也就是在mounted中访问，$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。

子孙组件访问祖先组件数据可以通过注入依赖实现，先组件定义provide选项允许我们指定我们想要提供给后代组件的数据/方法：provide:function() {return{getMap: this.getMap}}，然后在任何后代组件里，我们都可以使用inject选项来接收指定的我们想要添加在这个实例上的property：inject: ['getMap']

现在，你已经知道了 $emit 的用法，它可以被 v-on 侦听，但是 Vue 实例同时在其事件接口中提供了其它的方法。我们可以：通过$on(eventName, eventHandler)侦听一个事件、$once(eventName, eventHandler)一次性侦听一个事件、$off(eventName, eventHandler)停止侦听一个事件

内联模板，当 inline-template 这个特殊的 attribute 出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。这使得模板的撰写工作更加灵活。

X-Template，另一个定义模板的方式是在一个 <script>元素中，并为其带上 text/x-template 的类型，然后通过一个 id 将模板引用过去。例如：

使用$forceUpdate强制更新，你可能还没有留意到数组或对象的变更检测注意事项，或者你可能依赖了一个未被 Vue 的响应式系统追踪的状态。然而，如果你已经做到了上述的事项仍然发现在极少数的情况下需要手动强制更新，那么你可以通过 $forceUpdate 来做这件事。

通过 v-once 创建低开销的静态组件，渲染普通的 HTML 元素在 Vue 中是非常快速的，但有的时候你可能有一个组件，这个组件包含了大量静态内容。在这种情况下，你可以在根元素上添加 v-once attribute 以确保这些内容只计算一次然后缓存起来

在进入/离开的过渡中，会有 6 个 class 切换:
```
v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
```

CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。

通过以下 attribute 来自定义过渡类名：enter-class、enter-active-class、enter-to-class、leave-class、leave-active-class、leave-to-class、appear-class、appear-active-class、appear-to-class

注意appear没有默认插入的class比如appear、appear-to、appear-active，必须自己手动通过appear-class、appear-to-class和appear-active-class指明

当同时具备过渡和动画，就牵扯到时间问题，可以手动指定transition标签的type等于transition或animation来统一以过渡为准还是动画为准，若以短时间的为准，当短时间过了之后，就没有过度效果了

duration属性用在transition标签上，手动指定过渡时间，比如在指定type以动画结束时间为准时，若leave-active没有指定animation属性且没有duration属性，就算leave-active中有transition，但因为没有animation，所以没有过度效果，这时就可以手动给transition加上:duration="leave: 1000"来实现过渡

可以在attribute中声明JavaScript钩子：
```javascript
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
  
  v-on:before-appear="beforeAppear"
  v-on:appear="appear"
  v-on:after-appear="afterAppear"
>
  <!-- ... -->
</transition>

/*
注意：
1. 函数会传入el参数
2. 在只有过渡时，一定要在enter事件和leave事件末尾执行事件函数的第二个参数done回调函数，否则没有过渡效果
vue文档: 当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
/*
```

多个标签过渡可以这样使用transition：
```javascript
<transition>
  <table v-if="items.length > 0">
    <div>test</div>
  </table>
  <p v-else>Sorry, no items found.</p>
</transition>
/*
可以这样使用，但是有一点需要注意：
当有相同标签名的元素切换时，需要通过 key attribute 设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。即使在技术上没有必要，给在 <transition> 组件中的多个元素设置 key 是一个更好的实践。
*/
```

若多个标签相同必须定义key，否则会进行高效复用，不会创建新的标签节点，也就没有过渡效果

多个相同标签的v-if写法可以重写为:
```javascript
//根据key不同进行创建不同标签
<transition>
  <button v-bind:key="docState"> 
    {{ buttonMessage }}
  </button>
</transition>
```

当有多个标签一起过渡时，会出现消失的同时另一个进来，导致定位不好看，可以给transition指定属性mode为"out-in"等出去消失了，另一个再进来，或"in-out"先进来，另一个再出去

多个组件过渡可以写：
```javascript
//通过component的is属性切换组件
<transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>
```

多个标签写在一起，过渡，必须用transition-group包含

<transition-group>不同于<transition>，它会以一个真实元素呈现：默认为一个 <span>。你也可以通过 tag attribute 更换为其他元素。内部元素总是需要提供唯一的 key attribute 值。

v-move会在过渡的标签在开始时若定位变化则会触发，v-move会绑定给每一个过渡标签

混入定义：
```javascript 
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
//局部引入
new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
//全局引入
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
});
```

Vue.config.optionMergeStrategies 允许自定义合并策略

自定义指令：
```javascript
//全局注册
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
//局部注册
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

自定义指令的钩子函数：bind、unbind、inserted、update和componentUpdated，注意update是当前组件的VNode更新时调用，而componentUpdated是在当前VNode和其子VNode全部更新后被调用

指令钩子函数的参数：el、binding、vnode、oldvnode，binding包含了name、value、oldvalue、expression、arg、modifiers，注意modifiers是键名为修饰符，键值为true的对象,除了 el 之外，其它参数都应该是只读的

动态指令参数：v-mydirective:[argument]="value"

自定义指令注册简写：
```javascript
//下面的回调函数只在bind和update时被调用
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value;
});
```

由于每次渲染视图时都是先创建vnode，然后使用它创建的真实DOM插入到页面中，所以可以将上一次渲染视图时先所创建的vnode先缓存起来，之后每当需要重新渲染视图时，将新创建的vnode和上一次缓存的vnode对比，查看他们之间有哪些不一样的地方，找出不一样的地方并基于此去修改真实的DOM。

template模板最后还要通过render函数创建虚拟VNnode，而我们直接操作render创建VNode更高效

createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“VNode”。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

过滤器filter使用情节：
```javascript
//在双花括号中
{{ message | capitalize }}

//在v-bind中
<div v-bind:id="rawId | formatId"></div>

//filter局部定义
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

//filter全局定义
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

过滤器可以串联：{{ message | filterA | filterB }} 这样value就变为上一个filter传来的值





































































































































































































































































































































































































































































































































