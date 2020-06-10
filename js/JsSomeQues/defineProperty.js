let vm = {
  id: "juejin",
  name: "掘金",
  age: 22,
  password: 666666
};

let keys = Object.keys(vm)  //获取对象的所有key
console.log(keys)
keys.forEach(key => {
  let value = vm[key]
  Object.defineProperty(vm, key, {
    get() {
      console.log('执行get')
      return value
    },
    set(newValue) {
      console.log('执行set')
      if (newValue !== value) {
        value = newValue
      }
    }
  })
})

console.log(vm.password);
vm.password = 888888
console.log(vm.password);

var anObj = { 100: 'a', 2: 'b', 5: 'o', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']