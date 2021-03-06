const arr = [{ age: 10 }, { age: 20 }]
Array.prototype.Mymap = function (cb) {
  console.log(this);
  let t = [];
  for (let i = 0; i < this.length; i++) {
    t.push(cb(this[i]))
  }
  return t
}

Array.prototype.jingmap = function (cb) {
  return this.reduce((acc, cur) => {
    let res = cb(cur)
    return acc.concat(res)
  }, [])
}

const newArr = arr.Mymap(e => {
  return {
    ...e,
    age: e.age * 5
  }
})

console.log(newArr, '------')

const jing = [10, 20, 30];
const sum = jing.reduce((acc, cur) => {
  return acc = acc + cur
})

console.log(sum)
