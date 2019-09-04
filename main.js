// const fse = require('fs-extra');
// const file = 'file.txt'

// let c=fse.outputFile(file, 'hello!')
//     .then(() => fse.readFile(file, 'utf8'))
//     .then(data => {
//     // 
//     return data
// })
// .catch(err => {
//     console.error(err)
// })


// const axios = require('axios');
// let b=axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) { 
//     // console.log(response.data.userId);
//     // console.log(response.data.id);
//     // console.log(response.data.title);
//     return response.data
//   }) 
//   .finally(()=>console.log('End promise'))


//   let a=new Promise((res, rej)=>{
//     setTimeout(() => {
//         res('ok')
//     }, 2000)
//   })
//   .then((data) => {
//     // console.log(data);
//     return data
//   })

// // Promise.all([a,b,c])
// //     .then(data=>console.log("this is all promises ",data))






const axios = require('axios');
(async () => {    
    const b = await setTimeout(()=>console.log('aaaaa'),1000);    
    const a = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(a.data)
})()