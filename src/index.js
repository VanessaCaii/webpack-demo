import x from './x.js'
import png from './assets/1.png'

const div = document.getElementById('app')
// console.log('div')
// console.log(div)
// console.log(png)
// div.innerHTML = `
//     <img src="${png}">
//     `

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then( (module)=>{
        const fn = module.default
        fn()
    }, ()=>{
        console.log('模块加载错误')
    })
}

div.appendChild(button)