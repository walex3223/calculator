

const screen =document.querySelector('#screen')
function show(param){
    const par=document.querySelector('#para')
    if(par){
        screen.innerText=""
    }
    screen.innerText+=param

    
    // const scr=document.getElementById('screen')
    // if(par){   

    //     console.log("param")
    // }
}
const  screen2=document.getElementById('screen2')

function showanswer(){

    // screen2.textContent=screen.textContent
    // const pp=document.getElementById('para')
    
    try{
        
    //   const answ=eval(screen.textContent)

    //   pp.textContent=answ
        const answ=eval(screen.textContent)
        const pp=document.createElement('p')
        const screen2p=document.createElement('p')
        screen2p.textContent=screen.textContent+`=${answ}`
        
        pp.setAttribute('id','para')
        pp.textContent=answ

        
        screen2.appendChild(screen2p)
        
        screen.appendChild(pp)
        // screen.textContent=`${answ} `
    }

    catch(err){
        pp.textContent="error"
    }

    
// catch(err){
//     if(err instanceof TypeError){
//         screen.textContent="type error"
//     }
//     else{
//         screen.textContent="unknwown error "

// }
// }
}
// let nums=1
// const sc=screen.textContent
let count=1
function del(){
let con=""
const bb=screen.value;
for(let i=0; i<bb.length; i++)
    {
        con+=bb[i].toString()
    } 

console.log(con)

// screen.value=con.slice(count,con.length)
// count++
// console.log(bb.length)

}



function cls(){
    screen.innerText=" "
    
}

const testdiv=document.querySelector('#testdiv')
// function test(){
//     const pa=document.createElement('p')
//     pa.textContent="wow work"
//     testdiv.appendChild(pa)



// }
// const testdiv2=document.querySelector('#testdiv2')
// function test2(){
//     const pa=document.createElement('p')
//     pa.textContent="wow work"
//     testdiv2.appendChild(pa)



// }
