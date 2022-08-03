const person = {
  name : "Max" ,
  age : 20 ,
  isMarried : true ,
  hobby : ["Game" , 'Sport'] ,
  child : undefined ,
  run : function() { console.log('object')}

}

const str = JSON.stringify(person)
console.log(str)
console.log(typeof str)

const str2 = JSON.parse(str)
console.log(str2)
console.log(typeof str2)

const arrStr = '[{"Mac" : 10} , {"Ann" : 12}]'
const arr = JSON.parse(arrStr)
console.log(arr)
console.log(typeof arr)
