// let a = [2 ,3,4,5]

// try {
//   // console.log(b)
//   const input = ''
//   if (input === '') {
//     throw new TypeError('Input is Empty')
//   }
//   // console.log(a.map(el => el*2))

// } catch(err) {
//   console.log(err.message)
//   console.log(err.name)
// } finally {
//   console.log('finally')
// }
// let i = 1
// const timerId = setInterval(() => console.log(i++) , 1000)
// setTimeout(() => clearInterval(timerId) , 5000)

// //CallBack
// const fs = require('fs')  // Import fs from 'fs'
// fs.readFile('sale.json' , 'utf8' , (err,data) => {
//   if (err) return console.log(err) 
//   fs.readFile('user.json' , 'utf8' , (err2,data2) => {
//     if (err2) return console.log(err2) 
//     fs.readFile('product.json' , 'utf8' , (err3,data3) => {
//       if (err3) return console.log(err3) 
//       console.log(data)
//       console.log(data2)
//       console.log(data3)
//     })  
//   }) 
// })

// //Promise
// const obj = require('./date')
// console.log(obj)

// const fs = require('fs')  // Import fs from 'fs'

// const salePromise = new Promise((resolve , reject) => {
//   // setTimeout(() => {
//   //   fs.readFile('sale.json' , 'utf8' , (err,data) => {
//   //     if (err) return reject(err) 
//   //     resolve(data)
//   //   })} , 1000)
//     setTimeout(() => {
//       fs.readFile('sale.json' , 'utf8' , (err,data) => {
//         if (err) return reject('sale err') 
//         resolve(data)
//         // resolve('Promise')
//       })} , 3000)
// })

// const userPromise = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     fs.readFile('user.json' , 'utf8' , (err,data) => {
//       if (err) return reject('user err') 
//       resolve(data)
//       // resolve('Promise2')
//     })} , 2000)
    
// })

// const productPromise = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     fs.readFile('product.json' , 'utf8' , (err,data) => {
//       if (err) return reject('product err') 
//       resolve(data)
//       // resolve('Promise2')
//     })} , 3000)
    
// })

// const result = Promise.all([salePromise , userPromise , productPromise])
// result.then((data) =>{
//   console.log(data[0])
//   console.log(data[1])
//   console.log(data[2])
// }).catch((err) => console.log(err))


// // Promise Chain
// const promise3 = new Promise((resolve , reject) => {
//   setTimeout(() => resolve(1) , 1000)
//   // const error = new Error('Invalid Username')
//   // error.codeStatus = 401
//   // setTimeout(() => reject(error) , 1000)
// })

// promise3
//   .then(res => {return res * 2})
//   .then(res => {
//     // throw new Error('Error')
//     return res * 2})
//   .then(res => {return res * 2})
//   .then(res => {console.log(res)})
//   .catch(err => console.log(err.codeStatus + ' : '+err))



// promise.then((data) => {console.log(data)} , (err) => console.log(err))
// promise.then((data) => {console.log(data)
// }).catch((err) => {console.log(err)
// }).finally(() => console.log('fianlly'))

// Async
// async function asychoronous() {
//   setTimeout(() => console.log('Hello') , 1000)
// }
// const a = asychoronous()
// console.log(a)
// console.log('ABCD')

const fs = require('fs')
const userPromise = new Promise((resolve , reject) => {
  setTimeout(() => {
    fs.readFile('user.json' , 'utf8' , (err,data) => {
      if (err) return reject('err user') 
      // resolve(data)
      resolve('user')
    })} , 1000)
    
})

const productPromise = new Promise((resolve , reject) => {
  setTimeout(() => {
    fs.readFile('product.json' , 'utf8' , (err,data) => {
      if (err) return reject('err') 
      // resolve(data)
      resolve('product')
    })} , 1000)
    
})

async function run() {
  try {
    console.log('Begin')
    const userData = await userPromise
    // const userData = userPromise
    console.log(userData)
    console.log('Mid')
    const productData = await productPromise
    // const productData = productPromise
    console.log(productData)
    console.log('End')
  } 
  catch(err) {
    console.log(err)
  }
}

run()
console.log('Test')