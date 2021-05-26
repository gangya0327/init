// shallowReactive 浅劫持 reactive 深劫持

const reactiveHandler = {
  get(target, prop) {
    if (prop === '_is_reactive') return true
    const result = Reflect.get(target, prop)
    console.log('读取数据')
    return result
  },
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value)
    console.log('修改数据')
    return result
  },
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop)
    console.log('删除数据')
    return result
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function shallowReactive(target) {
  // 判断当前目标对象是否是object类型
  if (target && typeof target === 'object') {
    return new Proxy(target, reactiveHandler)
  }
  return target
}

function reactive(target) {
  // 判断当前目标对象是否是object类型
  if (target && typeof target === 'object') {
    // 判断当前数据是数组
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        // eslint-disable-next-line no-param-reassign
        target[index] = reactive(item)
      })
    } else {
      Object.keys(target).forEach((key) => {
        // eslint-disable-next-line no-param-reassign
        target[key] = reactive(target[key])
      })
    }
    // 判断当前数据是对象
    return new Proxy(target, reactiveHandler)
  }
  return target
}

const readonlyHandler = {
  get(target, prop) {
    if (prop === '_is_readonly') return true
    const result = Reflect.get(target, prop)
    console.log('读取数据')
    return result
  },
  set(target, prop, value) {
    console.warn('只能读取，不能修改')
    return true
  },
  deleteProperty(target, prop) {
    console.warn('只能读取，不能删除')
    return true
  }
}

function shallowReadonly(target) {
  if (target && typeof target === 'object') {
    return new Proxy(target, readonlyHandler)
  }
  return target
}

function readonly(target) {
  if (target && typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = readonly(target[key])
      })
    }
    return new Proxy(target, readonlyHandler)
  }
  return target
}

function shallowRef(target) {
  return {
    _value: target,
    get value() {
      console.log('读取value', this._value)
      return this._value
    },
    set value(newVal) {
      console.log('修改value')
      this._value = newVal
    }
  }
}

function ref(target) {
  target = reactive(target)
  return {
    _is_ref: true,
    _value: target,
    get value() {
      console.log('读取value', this._value)
      return this._value
    },
    set value(newVal) {
      console.log('修改value')
      this._value = newVal
    }
  }
}

function isRef(obj) {
  return obj && obj._is_ref
}

function isReactive(obj) {
  return obj && obj._is_reactive
}

function isReadonly(obj) {
  return obj && obj._is_readonly
}

function isProxy(obj) {
  return isReactive(obj) | isReadonly(obj)
}