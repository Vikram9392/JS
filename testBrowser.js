// console.log(document);

//specific selections

// const h1TagList=document.getElementsByTagName('h1');
// console.log(h1TagList[0]);
// console.log(h1TagList[1]);

// const pTagList=document.getElementsByTagName('p');
// console.log(pTagList);

// const randomH1Element=document.getElementById('randomH1');
// console.log(randomH1Element);

// const c1ClassElements=document.getElementsByClassName('c1');
// console.log(c1ClassElements);

//Generic selections

// const q1Element=document.querySelector('#randomH1');
// console.log(q1Element);

// const q1Element2=document.querySelector('.c1');
// const q1Element3=document.querySelector('h1');
// console.log(q1Element2);
// console.log(q1Element3);

// const q1Element=document.querySelectorAll('#randomH1');
// console.log(q1Element);

// const q1Element2=document.querySelectorAll('.c1');
// const q1Element3=document.querySelectorAll('h1');
// console.log(q1Element2);
// console.log(q1Element3);

// const q1Element3=document.querySelector('h1');
// console.log(q1Element3.innerText);

// const result=document.querySelectorAll('p');

// const nestedTag=document.querySelectorAll('div');

// const randomNumber=Math.floor(Math.random()*20);
// console.log(randomNumber);
// for(let i=0;i<randomNumber;i++){
//     console.log(i);
//     if(i===10){
//         const allDivTags=document.querySelectorAll('div');
//         // allDivTags[0].innerText='you are  a winner';
//         for(let divTag of allDivTags){
//             if(divTag.innerText=='this is div text2323'){
//                 divTag.style.color='red';
//                 divTag.style.backgroundColor='rgb(0,255,0)';
//                 divTag.style.fontSize='4rem';
//                 continue;
//             }
//             divTag.innerText="You are all winners";
//         }
//     }
// }

// const nestedTag=document.querySelectorAll('div');
// nestedTag[2].classList.add('classToBeAdded','check2Class');
// console.log(nestedTag[2].classList);

// const classToBeAddedElements=document.querySelectorAll('.classToBeAdded');
// console.log(classToBeAddedElements);

// for(let elem of classToBeAddedElements){
//     elem.style.textDecoration='underline';
// }
// const  idSelect=document.getElementById('demoId');

// for(let elem of nestedTag){
//     // console.log(elem.classList);
//     // if(elem.classList.contains('classToBeAdded')){
//     //     elem.style.textDecoration='underline';
//     // }
//     if(Array.from(elem.classList).includes('classToBeAdded')){
//         elem.style.textDecoration='underline';
//     }
// }

// nestedTag[1].classList.remove('classToBeAdded');

// function test(){
//  document.querySelector(random);
// }

// document.body.classList.add('bg-dark');

// document.querySelector('random');

// window.console.log();
// window.console.table();
// window.console.dir();
// window.console.error();
// window.console.warn();

// windows.setTimeout();
// windows.setInterval();

// windows.location

// console.log('iam starting');
// setTimeout(() => {
//     console.log('I am done with JS');
// }, 2000);
// console.log('the file is ending');

//All forms of CB
 
// function random1(){
//  console.log('1')
// }

// const random2=()=>{
//     console.log('random2');
// }

// const random3=function(){
//     console.log('random3');
// }

// setTimeout(random1,1000);
// setTimeout(random2,1000);
// setTimeout(random3,1000);

// setTimeout(() => {
//     console.log('random4');
// }, 1000);

// setTimeout(function(){
//     console.log('random5');
// }, 1000);

// const buttonTags=document.querySelectorAll('button');
// buttonTags[0].style.color='red';

// setTimeout(()=>{
//     buttonTags[1].style.backgroundColor='green';
// },2000);

// let count=0;
// const sIId=setInterval(()=>{
//     count++;
//     console.log(sIId);
// console.log('set Interval executed');
// if(count===10){
//     clearInterval(sIId);
// }
// },2000);

// const sIId2=setInterval(()=>{
//     console.log(sIId2);
// console.log('set Interval executed');
// },2000);

// const counterStartValueTag=document.getElementById('counter');
// console.log(typeof parseInt(counterStartValueTag.innerText));
// let counterStartValue=parseInt(counterStartValueTag.innerText);

// const counterEndValueTag=document.getElementById('countStop');
// let counterEndValue=parseInt(counterEndValueTag.innerText);

// const textNodeTag=document.getElementById('textNode');
// console.log(counterStartValue,counterEndValue);

// const sIId=setInterval(() => {
//     counterStartValue++;
//     if(counterStartValue===counterEndValue+1){
//         clearInterval(sIId);
//         setTimeout(() => {
//             textNodeTag.textContent='it has changed';
//         }, 3000);
        
//         return;
//     }
//     counterStartValueTag.textContent=counterStartValue;
// }, 10);

// let count=0;
// const demoId3tag=document.getElementById('demoId3');
// const pIdTag=document.getElementById('pId')
// console.log(demoId3tag);
//  demoId3tag.addEventListener('click',()=>{
//     console.log('demo id 3 tag clicked');
//     count++;
//     demoId3tag.innerHTML='on click change';
//     if(count>=3){
//         pIdTag.style.color='green';
//     }
// })

// pIdTag.addEventListener('click',()=>{
//     console.log('now a different tag is trigger');
// })

// demoId3tag.addEventListener('click',()=>{
//     console.log('new thing new thign')
// })

// const input1Tag=document.getElementById('input1');
// input1Tag.addEventListener('change',()=>{
//     console.log('changed');
// })

// input1Tag.addEventListener('focus',()=>{
//     console.log('now focusing on the input');
// })

// input1Tag.addEventListener('blur',()=>{
//     console.log('now blurring on the input');
// })

// function clickTest(){
//     console.log('now registering on html and triggered over here');
// }

// function testDb1(){
//     console.log('gets triggered on double click');
// }
// const testDb1=()=>{
//     console.log('the');
// }

// document.getElementById('bigBox')
//     .onclick=function(){
//         console.log('third way of handling');
//     }

// const inputTags=document.querySelectorAll('.numbInput');
// console.log(inputTags[0].value);

// const btn=document.querySelector('#btn');

// btn.addEventListener('click',()=>{
//     console.log(parseInt(inputTags[0].value));
//     console.log(inputTags[1].value);
// })

// const numbInput1Tag=document.getElementById('numbInput1');
// const numbInput2Tag=document.getElementById('numbInput2');
// const sumBtnTag=document.getElementById('sumBtn')

// sumBtnTag.addEventListener('click',()=>{
//     if(numbInput1Tag.value===''|| numbInput2Tag.value===''){
//     console.log('please enter the all the values');
//     return;
//     }
//     console.log(parseInt(numbInput1Tag.value)+parseInt(numbInput2Tag.value));
//     numbInput1Tag.value='';
//     numbInput2Tag.value='';
// })

// const bigBoxTag=document.querySelector('#bigBox');
// console.log(bigBoxTag);

// bigBoxTag.addEventListener('mouseenter',()=>{
//     console.log('entered in the box');
// })

// bigBoxTag.addEventListener('mouseover',()=>{
//     console.log('hovering in the box');
// })

// bigBoxTag.addEventListener('mouseout',()=>{
//     console.log('exiting the box');
// })

//data attribute

// const h1TagsWithH11Name=document.querySelector('h1[title="h11"]');
// console.log(h1TagsWithH11Name);

// const nestedDiv=document.querySelector('#randomId #r2');
// console.log(nestedDiv);

// const inputBoxes=document.querySelector('[name=checkboxes]');
// console.log(inputBoxes.checked);

//application of attribute selector

// const allCheckedBoxes=document.querySelectorAll('[checked]');
// console.log(allCheckedBoxes);

// for(let checkBoxElement of allCheckedBoxes){
//     checkBoxElement.addEventListener('click',()=>{
//         console.log('clicked');
//     })
// }

// const btnTag=document.querySelector('#sampleBtn');
// btnTag.addEventListener('click',()=>{
//     const newSelection=document.querySelectorAll(`input[type='checkbox']:checked`);
//     console.log(newSelection);
//     let checkedSelection=[];
//     for(let newSelec of newSelection){
//         if(newSelec.checked){
//             checkedSelection.push(newSelec);
//         }
//     }
//     console.log(checkedSelection);
// })

// const btnTag=document.querySelector('#sampleBtn');
// btnTag.addEventListener('click',()=>{
//     const radBtnSelected=document.querySelector(`input[type='radio']:checked`);
//     console.log(radBtnSelected.value);
// })

// let textData=document.querySelector('input[type="text"]');
// // let checkBoxData=document.querySelectorAll('input[type="checkbox"]');
// let btn=document.querySelector("#sampleBtn");
// let textDisp=document.getElementById("textDisplay");
// let radiOut=document.getElementById("radioOutput");
// let checkBoxData1=document.getElementById("checkboxesOutput")

// btn.addEventListener('click',()=>{
//     const checkBoxValues=[];
    
//     let radioData=document.querySelectorAll('input[type="radio"]:checked');

//     const radioOutputValue=radioData[0].value;

//     let checkBoxData=document.querySelectorAll('input[type="checkbox"]:checked');
//     for(let soloCheckBox of checkBoxData){
//         checkBoxValues.push(soloCheckBox.value);
//     }
//     textDisp.innerText=textData.value;

//     radiOut.innerText=radioOutputValue;
//     checkBoxData1.innerText=checkBoxValues;
// })

// const divTag=document.querySelector("#div1");
// console.log(divTag);
// divTag.addEventListener('click',(event)=>{
//     console.log(event.target.innerText);
//     event.preventDefault();
// })

// const form=document.querySelector('form')
//     form.addEventListener('submit',(event)=>{
//      event.preventDefault();
//     console.log('event2');
//    })
// //     form.addEventListener('submit',()=>{
// //     console.log('event');
// //    })
// //    form.addEventListener('submit',()=>{
// //     alert('abcd');
// //    })
   
// document.querySelector('a')
//         .addEventListener('click',(e)=>{
//             e.preventDefault();
//             console.log('some log');
//         })

// const form=document.querySelector('form');

// const obj={};

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const nameValue=document.querySelector('#name').value;
//     const ageValue=document.querySelector('#age').value;
//     obj.name=nameValue;
//     obj.age=ageValue;

//     console.log(obj);

    // const displayAreaTag=document.querySelector('#display area');
    // displayAreaTag.textContent=JSON.stringify(obj);
//     displayAreaTag.textContent=(function(){
//       return`${obj.name} ${obj.age}`
//     })()
// })

// document.querySelector('#sub')
//         .addEventListener('click',()=>{
//             form.submit();
//         })

// const gpTag=document.querySelector("#grandParent");
// const pTag=document.querySelector("#parent");
// const cTag=document.querySelector("#child");

// gpTag.addEventListener('click',()=>{
//     console.log('grand parent triggered');
// },false)

// pTag.addEventListener('click',()=>{
//     console.log('parent triggered');
// },false)

// cTag.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log('child triggered');
// },false)

// document.querySelector('#scissor')
//         .addEventListener('click',(e)=>{
//           console.log(e.target.innerText)
//         })

// document.querySelector('#paper')
//         .addEventListener('click',(e)=>{
//           console.log(e.target.innerText)
//         })

// document.querySelector('#pencil')
//         .addEventListener('click',(e)=>{
//           console.log(e.target.innerText)
//         })

// const arr=[];
// document.querySelector('#shoppingList')
//         .addEventListener('click',(e)=>{
//           // console.log(e.target.innerText)
//           // arr.push(e.target.innerText)
//           // console.log(arr)
//           console.log(e.target.tagName);
//           if(e.target.tagName==='LI'){
//            console.log(window.location.origin)
//           window.location.href=window.location.href+"/"+e.target.id
//           }
//         })

// document.querySelector('#form')
//         .addEventListener('click',(e)=>{
//           e.stopImmediatePropagation();
//           console.log('click2');
//         }) 
// document.querySelector('#form')     
//         .addEventListener('click',(e)=>{
//           console.log('click3')
//         })          

// const btn=document.querySelector('#btn').addEventListener('click',()=>{
//   const tempPTag=document.createElement('p');
//   tempPTag.innerText='this text was created from js';
//   console.log(tempPTag);

//   const test=document.createElement('div');
//   test.innerText='div text';
// const tempAag=document.createElement('a')
// const tempdivTag=document.createElement('div')
// console.log(tempPTag);

// const baseBody=document.body;
// console.log(baseBody);
// baseBody.append('abcd');
// baseBody.prepend(tempPTag)
// })


const btn1=document.querySelector('#btn');
const mainDivTag=document.querySelector('#mainDiv')
const allSpanTags=document.querySelectorAll('#mainDiv')


btn1.addEventListener('click',()=>{
    

    // const span1Tag=document.querySelector('#span1');
    // span1Tag.remove();

    //mainDivTag.innerHTML='';

    const allSpanTags=document.querySelectorAll('#mainDiv .span1')
    for(let span of allSpanTags){
        span.remove();
    }

})

btn2.addEventListener('click',()=>{
    const nd=document.createElement('span');
    nd.textContent='random addition';
    nd.classList.add('span1');

    nd.setAttribute('title',Math.random());
    nd.setAttribute('id','notTheCorrectWay')

    mainDivTag.append(nd);
})

btn3.addEventListener('click',()=>{
    const allSpanTags=document.querySelectorAll('#mainDiv .span1');
        for(let span of allSpanTags){
            span.removeAttribute('id');

    }
})