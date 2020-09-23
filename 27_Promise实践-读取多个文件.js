// 1. 引入 fs 模块
let fs = require('fs');

const p = new Promise((resolve, reject) => {
    fs.readFile('./README.md', (err, data) => {
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./README.md', (err, data) => {
            resolve([value, data]);
        })
    })
})