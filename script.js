var input = '';
const display=document.querySelector('#display-text');
const number=document.querySelectorAll('.number');
const operation=document.querySelectorAll('.operation');
const deleteButton=document.querySelector('#delete');
const clearAll=document.querySelector('#AC');
const point=document.querySelector('#point');
const equal=document.querySelector('#equal');


function inputLength(){
    return input.length<30;
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
    let max=arr.reduce((a,b)=>{
        return a<b.length?b.length:a;
    },0)
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
    while(input.includes('-')){
        arr=input.split(' ');
        if(arr.length==1)break;
        index=arr.indexOf('-');
        result=parseFloat(arr[index-1])-parseFloat(arr[index+1]);
        opToResult(arr,index,result);
    }
}

deleteButton.addEventListener('click',()=>{
    if(input[input.length-1] == ' '){
        input=input.substring(0,input.length-3);
        display.textContent=input;
    }
    else{
        input=input.substring(0,input.length-1);
        display.textContent=input;
    }

})

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

clearAll.addEventListener('click',()=>{
    input='';
    display.textContent='';
    }
)

equal.addEventListener('click',()=>{
    if(!bigNumberCheck()){
    divide();
    multiply();
    subtract();
    add();
    
    display.textContent=input;
    }
    else
    display.textContent='Cannot calculate big numbers(for now at least)'
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

