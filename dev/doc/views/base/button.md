## Button 按钮

> 常用的操作按钮，触发业务逻辑时使用。

---

### 基础使用

#### 按钮类型

<select class="mr20" name="btnType" v-model="btnType">
  <option v-for="type in btnTypeMapper" :value="type" v-text="type"></option>
</select><ks-button :type="btnType">按钮类型</ks-button>

```html
<select class="mr20" name="btnType" v-model="btnType">
  <option v-for="type in btnTypeMapper" :value="type" v-text="type"></option>
</select>
<ks-button :type="btnType">按钮类型</ks-button>
```

#### 按钮大小

<select class="mr20" name="btnSize" v-model="btnSize">
  <option v-for="size in btnSizeMapper" :value="size" v-text="size"></option>
</select><ks-button :size="btnSize">按钮大小</ks-button>

```html
<select class="mr20" name="btnSize" v-model="btnSize">
  <option v-for="size in btnSizeMapper" :value="size" v-text="size"></option>
</select>
<ks-button :size="btnSize">按钮大小</ks-button>
```

#### 幽灵按钮

<ks-button :ghost="true">幽灵按钮</ks-button>

```html
<ks-button :ghost="true">幽灵按钮</ks-button>
```

#### 加载按钮

<ks-switch class="mr20" :checked.sync="btnSwitch"></ks-switch><ks-button :loading="btnSwitch">幽灵按钮</ks-button>

```html
<ks-switch class="mr20" :checked.sync="btnSwitch"></ks-switch>
<ks-button :loading="btnSwitch">加载按钮</ks-button>
```

#### 按钮禁用

<ks-switch class="mr20" :checked.sync="btnDisable"></ks-switch><ks-button :disable="btnDisable">按钮禁用</ks-button>

```html
<ks-switch class="mr20" :checked.sync="btnDisable"></ks-switch>
<ks-button :disable="btnDisable">按钮禁用</ks-button>
```

<script lang="babel">
  let btnTypeMapper = [
    'primary',
    'success',
    'info',
    'warn',
    'danger',
    'other'
  ];
  
  let btnSizeMapper = [
    'normal',
    'middle',
    'large'
  ]

  export default{
    data () {
      return {
        btnTypeMapper,
        btnSizeMapper,
        
        btnSwitch: false,
        btnDisable: false,
        btnType: 'primary',
        btnSize: 'normal'
      }
    }
  }
</script>

### 脚本

```html
<script lang="babel">
  let btnTypeMapper = [
    'primary',
    'success',
    'info',
    'warn',
    'danger',
    'other'
  ];
  
  let btnSizeMapper = [
    'normal',
    'middle',
    'large'
  ];

  export default{
    data () {
      return {
        btnTypeMapper,
        btnSizeMapper,
        
        btnSwitch: false,
        btnDisable: false,
        btnType: 'primary',
        btnSize: 'normal'
      }
    }
  }
</script>
```
### API
| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| type | 用来描述按钮的类型 | props | String | **primary**, **success**, **info**, **warn**, **danger**, **other**| primary |
| size | 用来描述按钮的大小 | props | String | **normal**, **middle**, **large** | normal |
| ghost | 用来描述按钮是否是 `幽灵` 类型按钮 | props | Boolean | `true`, `false` | `false` |
| loading | 同步属性，用来控制按钮是否是加载状态 | props | Boolean | 无 | 无 |
| disable | 用来描述按钮是禁用 | props  | Boolean | `true`, `false` | `false` |
| nativeType | 用来描述按钮原生类型 | props | String | 无 | `button` |
