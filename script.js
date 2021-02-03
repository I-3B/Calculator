var input = '';
const display=document.querySelector('#display-text');
const number=document.querySelectorAll('.number');
const operation=document.querySelectorAll('.operation');
const allClear=document.querySelector('#allClear');
const clear=document.querySelector('#clear')
const point=document.querySelector('#point');
const equal=document.querySelector('#equal');
const posiNega=document.querySelector('#posi-nega')

function inputLength(){
    return input.length<80;
}

function opToResult(arr,index,result){
        console.log('start');
        console.log(input);
        console.log(arr);
        arr.splice(index - 1, 3, result);
        console.log(arr);
        input=arr.join(' ');
        console.log('end');
}

function bigNumberCheck(){
    let arr=input.split(' ');
    let max=arr.reduce((max,num)=>{
        num=parseFloat(num);
        return max<num?num:max;
    },parseFloat(arr[0]))
    console.log(max);
    return max>=15;
}

function divide(){
    let arr
    let index;
    let result;
    while(input.includes('÷')){
        arr=input.split(' ');
        index=arr.indexOf('÷');
        result=parseFloat(arr[index-1])/parseFloat(arr[index+1]);
        opToResult(arr,index,result);
    }
}

function multiply(){
    let arr
    let index;
    let result;
    while(input.includes('×')){
        arr=input.split(' ');
        index=arr.indexOf('×');
        result=parseFloat(arr[index-1])*parseFloat(arr[index+1]);
        opToResult(arr,index,result);
    }
}

function add(){
    let arr
    let index;
    let result;
    while(input.includes('+')){
        arr=input.split(' ');
        index=arr.indexOf('+');
        result=parseFloat(arr[index-1])+parseFloat(arr[index+1]);
        opToResult(arr,index,result);
    }
}

function subtract(){
    let arr
    let index;
    let result;
    while(input.includes(' - ')){
        arr=input.split(' ');
        index=arr.indexOf('-');
        if(arr[index].length==1){
        result=parseFloat(arr[index-1])-parseFloat(arr[index+1]);
        opToResult(arr,index,result);
        }
    }
}


number.forEach(i=>
    i.addEventListener('click',()=>{
        if(inputLength()){
        input+=i.textContent;
        display.textContent=input;
        }
    })
)

operation.forEach(i=>
    i.addEventListener('click',()=>{
        if(inputLength()&& input!='' && input[input.length-1]!=' '){
        input+=` ${i.textContent} `;
        display.textContent=input;
        }
    })
)

allClear.addEventListener('click',()=>{
    input='';
    display.textContent='';
    }
)
clear.addEventListener('click',()=>{
    if(input[input.length-1]==' ')
        input=input.substring(0,input.length-3);
    else
        input=input.substring(0,input.length-1);
        display.textContent=input
})

posiNega.addEventListener('click',()=>{
    let arr=input.split(' ');
    let last=arr.length-1;
    if(parseFloat(arr[last])>0)
        arr[last]='-'+arr[last];
    else if(parseFloat(arr[last])<0)
        arr[last]=arr[last].substring(1);
    input=arr.join(' ');
    display.textContent=input;
})

equal.addEventListener('click',()=>{
    if(input[input.length-1]!=' '){
    divide();
    multiply();
    subtract();
    add();
    display.textContent=input;
}
}
)

point.addEventListener('click',()=>{
    let arr=input.split(' ');
    if(arr[arr.length-1].indexOf('.')==-1&&input!=''&& input[input.length-1] !=' '){
        input+='.';
        display.textContent=input;
    }
}
)

