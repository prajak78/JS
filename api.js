const axios = require('axios')

// axios({
//   method : 'get' ,
//   url : 'https://jsonplaceholder.typicode.com/users'

// }).then((res) => console.log(res.data))
//   .catch((err) => console.log(err.response.status))


// async function run () {
//   const res = await axios({
//     url : 'https://jsonplaceholder.typicode.com/users'
//   })
//   const data = res.data
//   console.log(data)
// }

// const run = async () => { 
//   const res = await axios('https://jsonplaceholder.typicode.com/users' , {
//     method : 'get' ,
//     data : { test : '555'}
//   })
//   const data = res.data
//   console.log(data)
// }

// async function run () {
//   const res = await axios({
//     url : 'https://jsonplaceholder.typicode.com/users'
//   })
//   const data = res.data
//   console.log(data)
// }

// run()

// axios.get('https://jsonplaceholder.typicode.com/posts',{data : {test : 555}} )
//   .then( res => console.log(res.data))
//   .catch(err => console.log(err))

// axios.post('https://jsonplaceholder.typicode.com/posts',
//   { title : 'fooee' , body : 'baeeer' , userId : 1})
//   .then( res => console.log(res.data))
//   .catch(err => console.log(err))

// axios.get('https://jsonplaceholder.typicode.com/users/11')
//   .then( res => console.log(res.data))
//   .catch(err => console.log(err.response.status))
  

axios
  .post('http://localhost:8080/todos', { title : 'A' , completed : false})
  .then( res => console.log(res.data))
  .catch(err => console.log(err.response))

// axios
//   .put('http://localhost:8080/todos/c335bcd6-eb29-419a-9f25-edd294ba7102' , { title : 'Watch4', completed : false })
//   .then( res => console.log(res.data))
//   .catch(err => console.log(err.response))

// axios.delete('http://localhost:8080/todos/18fa3e56-0192-47f4-b359-8bdd3f8e580e' )
//   .then( res => console.log(res.data))
//   .catch(err => console.log(err.response))

// axios.get('http://localhost:8080/todos')
//   .then( res => console.log(res.data))
//   .catch(err => console.log(err.response.status , err.response.data))



