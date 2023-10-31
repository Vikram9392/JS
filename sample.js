// var myFirstVariable='abcd';
// console.log(myFirstVariable);

// var myFirstVariable=10;
// console.log(myFirstVariable);

// var myFirstVariable=[];
// console.log(myFirstVariable);

// var myFirstVariable={};
// console.log(myFirstVariable);

// var myFirstVariable=true;
// console.log(myFirstVariable);

// var myNum=10;
// console.log(typeof (myNum));

// var myStr='str'
// console.log(typeof (myStr));

// var myBoolean=true;
// console.log(typeof (myBoolean));

// var arr=[];
// console.log(typeof (arr));

// var obj={};
// console.log(typeof (obj));

// var constStr=new String('str2');
// console.log('this is my string',constStr);
// console.log(typeof (constStr));

// var constNum=new Number(10);
// console.log('this is my number',constNum);
// console.log(constNum);

// var dt=new Date();
// console.log(typeof dt);

// var a=0;
// a++;
// a++;
// console.log(a);

// if(a){
//  console.log('I am inside if');
// }

// var zerro=null;
// if(zerro){
//     console.log('aww i got executed');
// }
// else{
//     console.log('not executed');
// }

// var a=0;
// if(a===a){
// a ? console.log('10') : console.log('20');
// }
// else{
//     console.log('else');
// }

// var a=0;
// var b='0';
// if(parseInt(b)===a){
//     console.log('executed')
// }
// else{
//     console.log('now i am definetely executed');
// }

// var arr=[];
// var obj={};
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.pop();
// arr.push(40);
// console.log(arr);

// var falsy='10';
// var truthy=0;
// var ans = falsy ? ((truthy || -10) ? 10 : 4 ): 2;
// console.log(ans);

// var ans;
// var abcd=10;
// if(ans&&abcd){
//     console.log('in if');
// }
// else if(ans){
//     console.log('in else if');
// }
// else{
//     console.log('in else');
// }

// var ans;
// var abcd=10;
// var arr=[];
// if((ans&&abcd)||arr){
//     console.log('in if');
// }
// else{
//     console.log('in else');
// }

// function myFunc(){
//     console.log('abcd');
//     return 10;
// }
// var a=myFunc();
// console.log(a);

// function myFunc(myNum,myNum2,myNum3){
//     console.log(myNum);
//     console.log(myNum2);
//     console.log(myNum3);
//     return 10;
// }
// var myNum=10;
// var a=myFunc(100);
// console.log(a);

// var myFuncVariable=function mySomething(){
//     console.log('inside the function expression');
// }
// myFuncVariable();

// function myFunc(){
//     console.log('my func called')
// }
// var myFuncStore=myFunc();
// console.log(myFuncStore);

// var a=10;
// var b=30;
// function myFunc(newa,newb){
//     console.log(newa);
//     console.log(newb);
// }
// myFunc(a,b);

// console.log(a)
// var a=10;
// function temp(){
//     var b=40;
//     return b;
// }
// var funcValue=temp();

// temp(a)
// var a=100;
// function temp(a){
//     console.log(a);
//     console.log('inside temp');
// }
// var a=100;

// var numb1=100;
// console.log(addition(numb1,numb2));
// var numb2='add';
// function addition(a,b){
//     console.log(a+200);
//     return a+b;
// }

//  var g1=100;
// function inner2(){
//     console.log(g1);
//     console.log(inn1);
//     var inn2=300;
//     console.log(inn2)
// }
// function inner1(){
//         console.log(g1);
//         var inn1=200;
//         console.log(inn1)
//     inner2();
//     // console.log(inn2)
// }
// inner1();
// console.log(g1);
// console.log(inn1);
// console.log(inn2);

// var a=100;
// function ran1(){
//     a=200;
//   console.log(a);
// }
// function ran2(){
//     var a=100;
//     console.log(a);
//     function ran3(){
//         console.log(a);
//     }
//     ran3();
// }
// ran1();
// ran2();

// var x=200;
//  function exec1(){
//     if(x>10){
//        var x=50;
//     }
//  console.log(x);

//  }
//  exec1();
//  console.log(x);

// function sample(){
//     console.log(x);
//     var x=500;
// }
// sample();

// console.log(y);
// var y=200;

// var y=200;
//  function exec1(){
//     if(y>10){
//         var x=50;
//     }
//  console.log(x);

//  }
//  exec1();
//  console.log(x);

//  var y=200;
//  function exec1(){
//     var y;
//     if(y>10){
//         var x=50;
//     }
//     y=100;
//  console.log(x);
//  console.log(y);

//  }
//  exec1();
//  console.log(x);
//  console.log(y);

// var obj={};
// var obj2=new Object();
// var obj3={
//     name:'vikram',
//     age:4,
//     gender:'male',
// }
// console.log(obj3);

// //dot notation
// console.log(obj3.name);
// console.log(obj3.gender);

// //square bracket notation
// console.log(obj3['age']);
// console.log(obj3['gender']);
// console.log(obj3['name']);

// obj3.location='warangal'
// console.log(obj3);

// obj3['school']='vandana high school';
// console.log(obj3);

// var str='this is my first format of string';//single quotes
// var str="this is my second format of string";//double quotes
// var str=`this is my third format of string`;//tilde quotes

// var str="this is my'first'format of string";//double quotes
// var str='this is my"first"format of string';//single quotes,double quotes inside

// var abcd=10;
// var name='vikram';
// var age=27;
// var strSingle='this is my first number'+abcd;
// var strDouble="this is my first number"+abcd;
// var strTilde=`this is my first number ${abcd}`;

// var strTildeCompilcated=`this is my tilde variable,I am ${name} and my age is ${age}`;

// var out=10;
// function outer(){
//     var ins=200;
//     inner();
//     console.log(`this is my outer ${out}`);
//     out=200;
// }
// function inner(){
//     out=20;
//     //console.log(`inside ${ins}`);
// }
// outer();

// let abcd=10;
// console.log(`this is my outer ${abcd+10+20+50}`);

// function outer(){
//     abcd=10;
//     console.log(abcd);
// }
// console.log(abcd);
// outer();

// function parentCheck(){
//     var check=function check2(){
//         console.log('check 2');
//     };
//     var functionReturn=check();
//         return functionReturn;
// }
// parentCheck();

// function parent(){
//     var sample='sam'
// function hoisted(){
//     return 'I am a function';
// }
// var hoisted="I am a variable";
// var hoisted=function sample(){
//     console.log('sample func');
//     console.log('I am another variable');
// }
//     return hoisted();
// }
// console.log(parent());

// function parent10(){
//     var sample='sam'
// function hoisted(){
//     return 'I am a function';
// }
// //var hoisted="I am a variable";
// var hoisted=hoisted();
// console.log(hoisted)
// //return hoisted();
// }
// parent10();

// var var1=10;
// test1();
// test();
// function test1(){
//     console.log(var1);
//     var1=20;
// }
// function test2(){
//     console.log(var1);
// }

// var var1=20;
// var var2=50;
// function test1(){
//     console.log(var1);
//     var2=test2();
//     console.log(var2);
//     console.log(var1);
// }
// function test2(){
//     var1=30;
// }
// test1();

// function normalFunc(){
//     console.log('abcd');
// }
// normalFunc();

// var functionExpression=function abcd(){
//     console.log('abcd');
// }
// functionExpression();

// var functionExpression2=function(){
//     console.log('abcd');
// }
// functionExpression2();

//  (function normalFunc(){
//     console.log('abcd');
// })();

// (function normalFunc3(var2){
//     console.log(var2);
// })(50);
// var functionExpression=function normalFunc3(var2){
//     console.log(var2)
// }
// functionExpression(20);

// function normalFunc4(var1){
//     console.log(var1);
// }
// normalFunc4(10);

// function mainFunc(cb,cb2){
//     var test=10;
//     console.log(cb(test));
//     //console.log(cb2);

// }
// function passingFunc(num){
//      console.log(num);
//  }
//  function mainFunc2(){
//     console.log('main');
// }
// var mainFunc3=function(){
//     console.log('mainfunc 3')
// }
//  mainFunc(passingFunc,mainFunc3,mainFunc2);

// var testFunc=function(){
//     console.log('random');
//     return 'now I will be printed';
// }
// var testFunc3=function(){
//     console.log('random');
//     return 'now I will be printed';
// }
// var testFunc4=function(){
//     console.log('random');
//     return 'now I will be printed';
// }
// var testfunc2=function test(){
//     console.log('random')
//     return 'now I will be printed';
// }
// console.log(testfunc2());
// console.log(testFunc());
// console.log(testFunc3());
// console.log(testFunc4());

// function mainFunctest(numb){
//     console.log(numb);
// }
// var testVar=10;
// mainFunctest(testVar);

// var x=10;
// console.log(x);
// if(true){
//     (function(){
//         var x=20;
//         console.log(x)
//     })();
// }
// console.log(x);

// var temp=function(){
//     console.log('first');
// }
// var temp2=function(cb){
//     console.log('second');
//     return cb;
// }
// console.log(temp2(temp));

// function temp1(){
//     function temp2(){
//         console.log('first');
//     }
//     return temp2;
// }
// var abcd=temp1();
// console.log(abcd);

// function sum(){
//     var x=10;
//     x++;
//     return x;
// }
// function temp1(){
//     return sum();
// }
// var abcd=temp1();
// var abcd2=temp1();
// console.log(abcd);
// console.log(abcd2);

// var x=200;
// function sum(){
//     x++;
//     return x;
// }
// function temp1(cb){
//     return cb();
// }
// var abcd=temp1(sum);
// var abcd2=temp1(sum);
// console.log(abcd);
// console.log(abcd2);

// var myVar="foo";
// (function(){
//     console.log(`my foo is ${myVar}`);
//     var myVar="bar";
//     console.log(`my foo is ${myVar}`);
// })()

// var firstArrowFuncForm=()=>{
//     console.log('I am first arrow function');
// }
// firstArrowFuncForm();


// var secondArrowFuncForm=num=>{
//     console.log(num);
// }
// secondArrowFuncForm(10);
 
//var thirdArrowFuncForm=num=>console.log(num);

// var fourthArrowFuncForm=(num1,num2)=>console.log(num1+num2);
// fourthArrowFuncForm(100,200);
// thirdArrowFuncForm(1000);
// thirdArrowFuncForm(20);
// thirdArrowFuncForm(30);
 
// var funcArr=num=>{
//     console.log(num);
// }
// funcArr(100,200,3000);

//  function highOrderFunction(cb){
//   console.log('I am higher');
//      console.log(cb);
//  }

// function firstClassFunction(){
//      console.log('I am first');
//  }
// highOrderFunction(firstClassFunction);

//  highOrderFunction(function (){
//        console.log('I am first');
// })
// var numb=10;
// highOrderFunction(numb);
// highOrderFunction(10);

// function isEvenNumber(numb){
//     if(numb%2===0){
//         return true;
//     }
//     return false;
// }
// isEvenNumber(10)


// function isEvenNumber(numb){
//     return numb%2===0;
// }

// var isEvenNumber=(numb)=>{
//     return numb%2===0;
// }

// var isEvenNumber=numb=>{
//     return numb%2===0;
// }

// var isEvenNumber=numb=>numb%2===0;

// var isEvenNumber=numb=>100

// var returnValueOfTheFunc=isEvenNumber(99);
// console.log(returnValueOfTheFunc);

// var variable=10;
// (()=>{
//     variable_3 =35;
//     console.log(variable_3);
//     var variable_3=45;
//     variable_2=15;
//     console.log(variable);
// })();
// console.log(variable_2);
// console.log(variable_3);
// var variable=30;

// console.log(console.log('abcd'));
// console.log(100+200);

// var abcd=200 || 400;
// console.log(abcd);

// var temp2=400 && (800 || 1000);
// console.log(temp2);

// var temp3=500 || undefined;
// console.log(temp3);

// var temp4='' || 1000;
// console.log(temp4)

// function A(){
//     console.log('called A');
//     return false;
// }
// function B(){
//     console.log('called B');
//     return false;
// }
// function C(){
//     console.log('called C');
//     return true;
// }
// console.log(C()&&(A() || B()));

// function sample(){
//     return'retu'
//     console.log('I wanna execute');
//     console.log('execute me please');
// }
// var returnVal=sample();
// console.log(returnVal);

// function hof(cb,cb2){
//     cb();
//     cb2();
//     console.log('abcd');
//     console.log('def');
// }
// hof(()=>{
//     console.log('first')
// },10);


// var functonStore=10;
// functonStore();

// function testHof(cb){
//     cb();
// }
// var funcFirstClass=()=>{
//     console.log('first class');
// }
// testHof(funcFirstClass);

// testHof(()=>{
//     console.log('first class');
// },10)

// function hof2(sumCb,numb){
    //  try{
    // cb();
    // if(numb<=100){
    //     throw new Error(`Hof2 can only take numbers greater than 100`);
    // }
    // var sum1=sumCb(20,30);
    // var furtherSum=sumCb(sum1,100);
    // }
//     if(client.userType!=='customer'){
//         throw new Error('something went wrong,our system is facing  technical diffculties');
//     }
//     orderPlaced();
//     try{

//     }
//     catch(errr){
//         console.log('errr')
//     }
// }
//      catch(error){
//         console.log(`hof2 cb error: ${error.message}`);
//     }
//     console.log('first');
//     console.log('second');
//  }
// hof2(func,50);

// function abcd(){
//     try{
//         plo=10;
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// abcd();
// try{
//     console.log(plo);
// }
// catch(err){
//     console.log(err);
// }

// function abcd2(){
//     plo2=10;
// }
// abcd2();
// console.log(plo2);

// var abcd=10;
// var abcd=20;

// function test()
// {
// let letVarible=10;
// const constVariable=30;
// var ab=20;
// console.log(letVarible);
// console.log(constVariable);
// console.log(ab);
// console.log(letVarible);
// console.log(constVariable);
// }
// test();
// console.log(varVariable);
// console.log(letVarible);
// console.log(constVariable);

// var abcd2=10;
// function test1(){
    // var abcd2=30;
    // console.log(abcd2);
    // let variable1=10;
    // {
    //     var var2=30;
    //     const abcd=20;
    //     console.log(variable1);
    // }
    // console.log(variable1);
    // console.log(var2);
    // console.log(abcd);
// }
// console.log(abcd2);
// test1();

//var abcd2=10
// function test(){
//     //let abcd2=10;
//     var abcd2=10;
//     console.log(abcd2);
//     {
//       var abcd2=40;
//       console.log(abcd2);
//     }
//     {
//       let  abcd2=50;
//       console.log(abcd2);
//     }
//     {
//        abcd2=500;
//        console.log(abcd2);
//     }
//     {
//         let abcd2=100;
//         console.log(abcd2);
//     }
//     {
//        let abcd3=20;
//        console.log(abcd2)
//     }
// }
// test();

// for(var i=0;i<10;i++){
//   console.log(i)
// }

// var arr=[10,20,
//   [10,20,30,[40],[50,60]]];
// var decArr2=[{'naman':10},['abcd',10,false],[{one:10}],1,2,3,4];
// for(var i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }
// for(var numb of arr){
//   console.log(numb);
//   if(Array.isArray(numb)){
//     for(var numb2 of numb){
//       console.log(numb2)
//     }
//   }
// }

// const aFunction=()=>{
//   console.log(var1);
// }
// let var1=200;
// aFunction();
// if(true){
//   let var1=201;
//   console.log(var1);
// }
// if(var1%2===0){
//   console.log(var1);
// }

// console.log(a);
// let a=100;


// function tempExplain(){
//   console.log(a);
//   {
//     console.log(a);
//     let a=100;
//   }
// }


// function tempExplain(){
//   console.log(a);
//   console.log(a);
//     var a=100;
//   {
//     console.log(a);
//     var a=100;
//  }
//  }
//tempExplain();

// function tempExplain(){
//   let a=10;
//   {
//     let a=300;
//     console.log(a);
    
//   }
//   {
//   console.log(a);
//   a=100;
//   }
//   console.log(a);
// }
// tempExplain();

// let a=10;
// function test1(){
//   if(a>5){
//     console.log(a);
//   }
//   var a=200;
// }
// test1();

// let a=10;
// {
//  var a=20;
// }

// var b=20;
// {
// let b=200;
// }

// var c=200;
// {
//   var c=200;
// }

// let d=200;
// {
// let d=300;
// }

// var e=200;
// function random(){
//   var e=300;
// }

// var f=200;
// function random(){
//   let f=300;
// }

// function abcd(){
//   let a=b=40;
//   console.log(a);
//   console.log(b);
// }
// abcd();
// console.log(b);
// console.log(a);

// {
//   let a;
//   console.log(a);
// }
// console.log(a);

// let abcd=10;
// let arr=[100,'string','boolean',false,true,
//                  [10,20,30,40],['str',abcd]
//        ]
// console.log(arr[5][4][1]);

// for(let randomVariableName of arr){
//   console.log(randomVariableName);
// }

// let arr2=[10,20,30,40,
//           [20,30,40],
//           [10,20,30]
//         ]

// var arr=[190,500,600];
// arr.shift();//removing from the start of the array
// console.log(arr);

// arr.unshift(9000);//adding in the start of the array
// console.log(arr);

// const arr=[10,20,30,40];
// arr.push(50);
// console.log(arr);

// const obj={name:'vikram',age:27}
// obj.gender='male';
// console.log(obj);

// function sample(arr2){
//     arr2.push(10);
// }
// const arr=[20,40];
// sample(arr);
// console.log(arr);

// function sample2(numb){
//     numb=40;
// }
// const numb=100;
// sample2(numb);
// console.log(numb);

// function complexCode(arr,obj,numb){
//     arr=[30,40,50]
//     obj.age=50;
//     obj.range=20;
//     numb=90;
//     return arr;
// }

// const arr=[10,20,30];
// const obj={name:'vikram',age:27}
// const numb=50;
// complexCode(arr,obj,numb);

// console.log(arr);
// console.log(obj);
// console.log(numb);

// function nest1(arr){
//     arr=nest2(arr);
// }
// function  nest2(arr){
//     arr.push(200);
//     arr.push({});
//     arr=[200];
//     return arr;
// }
// const arr=[50];
// nest1(arr);
// console.log(arr);

// const check1=10;
// check1=10;
// console.log(check1);

// const arr1=[10,20,30];
// const arr2=arr1;
// arr2.push(40);
// console.log(arr1);
// console.log(arr2);

// const arr1=[10,20,30];
// const arr3=arr1;
// const arr2=arr1;
// arr2=arr3;

// arr2.push(40);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// function com(arr2,obj,numb){
//     arr2.push(22);
//     arr=[30,40,50];
//     obj.age=50;
//     obj.range=20;
//     numb=90;
//     console.log(arr);
//     return arr;
// }
// const arr=[10,20,30];
// const obj={name:'vikram',age:27};
// const numb=50;
// com(arr,obj,numb);
// console.log(arr);
// console.log(obj);
// console.log(numb);

// const arr=[true,false,[1,3,4,function(){console.log('abcd')}],{name:'vikram',age:27}];
// console.log(arr[1]);
// console.log(arr[2][2]);
// console.log(arr[2][3]);

// const abcd=[10,20];
// let  defg=abcd;
// defg.push(100);
// console.log(defg);
// console.log(abcd);

// const a=[];
// const b=[];
// console.log(a===b);
// console.log(a==b);

// const a=[20];
// const b=[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

// const c=[20];
// const d=[30];
// console.log(c[0]==d[0]);
// console.log(c[0]===d[0]);
// console.log(typeof c);
// console.log(typeof c==typeof d);

// const c=[20];
// const d=[30];
// const e={name:'vikram'};
// console.log(Array.isArray(c));
// console.log(Array.isArray(e));

// const str='javascript';
// console.log(str[6]);

// const str='javascript';
// const arrStr=str.split();
// console.log(arrStr);

// const str='ja va script';
// const arrStr=str.split(' ');
// console.log(arrStr);

// const str='ja va script';
// const arrStr=str.split(' ');
// console.log(arrStr);

// const str="java,is a differnet,language,from javascript";
// const arrStr=str.split(",");
// console.log(arrStr);

// const str="javascript";
// const str1="value";
// console.log(str+str1);

// const concatenaedArray=(str.trim()+" "+str1.trim()).split(' ');
// console.log(concatenaedArray);

// const normalArr=['java','is a diffrenet','language from javascript'];
// const str=normalArr.join();
// const str=normalArr.join(' and ');
// console.log(str);

// const  arr=[10,20,30,40];
// const arr2=[100,200,300,400];

// const arr3=arr.join();
// const aa3=arr2.join();

// aa3.join();
// console.log(arr3.split(","));


// const arr=[10,20,30,40];
// const arr2=[100,200,300,400];
// const arr3=[100,200,300,400];

// const combined=[...arr,...arr2,...arr3];
// console.log(combined);

// function sample(cb,numb){
//     console.log(cb);
//     console.log(numb);
// }
// function sampleChild(){
//     return 100;
// }
// sample(sampleChild(),500);


// spread operator

// const arr1=[10,20,30];
// const arr2=[10,20,40];
// const arr3=[...arr1,...arr2];
// console.log(arr3);

//rest operator

// function restCheck(var1,...val){
//     console.log(val[0]);
//     console.log(val[1]);
//     console.log(val[2]);
//     console.log(var1);
// }
// // restCheck('abcd','defg','lpopopop')
// restCheck(1,2,3);

//const[a,b,...restTest]=[10,20,30,40,50];

//destructing 

// const a=[10,20,30];
// const[i,j,k]=a;
// console.log(i);
// console.log(j);
// console.log(k);

// const [var1,var2,var3]=[100,200,300];

// const var4=a[0];
// const var5=a[1];
// const var6=a[2];

// const[var7,var8,var9]=a;

// const func=((a)=>{
//     return  4+a;
// })();
// const obj={name:'vikram'};
// const [fun,random]=[func(4),obj];
// console.log(fun);
// console.log(random);

// const arr2=[{name:'vikram'},{age:27},{gender:'male'}];
// arr2[0];

// const a=10;
// const b=20;
// const c=30;
// const obj={name:'vikram'}
// constVariableBasedArr=[a,b,c,obj['name']];
// console.log(constVariableBasedArr);

// const weirdFuncDefination=abcd=>abcd;
// const returnFunc=weirdFuncDefination(2);
// console.log(returnFunc);

// function sample2(){
//     return 4;
// }
// function sample(){
//     return [sample2,
//         (
//             ()=>5
//         )(),
//         ()=>10,
//         abcd=>abcd
//     ];
// }

// const [a1,a2,a3,a4,a5]=sample();
// console.log(a1);
// console.log(a2);
// console.log(a3(10));
// console.log(a4(2));
// console.log(a5);

// function abcd(){

// }
// const test2=()=>{
//     return 10;
// }
// const  test3=()=>{
//     const a=10;
//     const b=20;
//     return a+b;
// }
// const test4=()=>10;
// const test5=abcd => abcd + 20;//if we are dealing with strictly one parameter
// const test6= =>20;//error
// const test7= abcd, abcd2 => abcd + abcd2;//error

// const[a,b,c,d]=[10,20];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const[i,j,...check]=[10,20,30,40,50];
// console.log(i);
// console.log(j);
// console.log(check);

// function sample(){
//     return [true,()=>{},5];
// }
// const[...arr]=sample();
// console.log(arr[2]);

//concat 

// const arr=[10,20,30];
// const arr2=[40,50,60];
// const arr4=[100,200,300];
// const arr3=arr.concat(arr2,arr4);
// console.log(arr3);

//reverse

// const strArr=['abcd','defg','plplplpl','ewhfuefewhf'];
// strArr.reverse();
// console.log(strArr);

//slice

// const arr=[10,20,30,40,50,60,70,80];
// const  slicedArr=arr.slice(1);
// console.log(slicedArr);
// console.log(arr);

// console.log(arr.slice(3));
// console.log(arr.slice(0));
// const something=arr.slice(0);
// console.log(something==arr);

// console.log([]===[]);
// console.log([]==[]);

// console.log({}==={});
// console.log({}=={});

// const a={};
// const b=a;
// console.log(a===b);

// const arr=[10,20,30,40,50,60,70,80];
// const slicedArr=arr.slice(1,4);
// console.log(slicedArr);

// const sliced2=arr.slice(0,arr.length);
// const sliced3=arr.slice(2,2);
// const sliced4=arr.slice();

// console.log(sliced2);
// console.log(sliced3);
// console.log(sliced4);

// console.log(arr.slice(-1));

// console.log(arr.slice(-3));
// console.log(arr.slice(-3,-1));
// console.log((-4,arr.length));
// console.log(arr.slice(-1,-4));

//spilce

// const arr=[10,20,30,40,50,60];
// arr.splice(2);
// console.log(arr);

// arr.splice(2,4);
// console.log(arr);

// arr.splice(2,2);
// console.log(arr);

// arr.splice(2,1,'changed');
// console.log(arr);

// arr.splice(2,2,'changed1','changed2');
// console.log(arr);

// arr.splice(2,2,'changed1');
// console.log(arr);

// arr.splice(arr.length-2,'arr');
// console.log(arr);

// const arr=[10,20,30,40,50,60];
// const deletedArr=arr.splice(4);
// console.log(deletedArr);

// const deletedArr=arr.splice(2,2,'ch1','ch2');
// console.log(deletedArr);
// console.log(arr);

// const deletedArr=arr.splice(2,1,'check1','check2','check3','check4');
// const deletedArr=arr.splice(2,0,'check1','check2','check3');
// console.log(arr);

// const arr=[10,20,30,40,50,60];
// const deleteArr1=arr.splice(2,2,100,100);
// const deletedArr2=arr.splice(1,1,500);
// const deleteArr3=arr.splice(3,2,10,20,30,40);
// console.log(deleteArr3);
// console.log(arr);


//IndexOf

// const arr=['a','b','c','d','a','a','a'];
// const index=arr.indexOf('a');
// console.log(index);

//lastIndexOf

// const lastIndex=arr.lastIndexOf('a');
// console.log(lastIndex);

//higher order function

// function hof(numb,cb){
//     for(let i=0;i<3;i++){
//         cb(numb+i);
//     }
// }
// hof(10,(numb)=>{
//     console.log('execute this',numb);
// })

// hof(20,(newVal)=>{
//     console.log('new exec',newVal);
// })

//every

// const isEven=(numb)=>{
//     return !(numb%2);
// }

// const isOdd=(numb)=>{
//     return (numb%2);
// }
// const arr=[2,4,6,8];
// const result=arr.every(cb);
// console.log(result);

// const result2=[2,4,6,8].every(cb);
// console.log(result);

//map

// const arr=[2,4,6,8];
// const result=arr.map((val)=>{
//     function addNumber10(){
//         return val+20;
//     }
//     let newNum=addNumber10(val)
//     console.log(newNum);
// })

// const arr=[2,4];
// const cbFunc=(val,index,completedArr)=>{
//     //console.log(val+2);
//     // return [val+index,index];
//     //console.log(completedArr);
//     return{function(){
//         return 10;
//     }}
// }
// const result=arr.map(cbFunc);
// console.log(result[1][0]);

// const cb=(index,val)=>{
//     if(!(val%2)){
//         return index;
//     }
//     return val;
// }
// const result=[100,150,201,400].map(cb);
// console.log(result);

// [[100,150,201,400],[400]].map(cb);
// function cb(val,index){
//     console.log(val);
// }

//Filter

// const arr=[2,5,7,100];
// const result=arr.filter((val)=>{
//     return !!0;
// })
// console.log(result);

// const arr=[true,false,true,false];
// const result=arr.filter((val)=>{
//     return true;
// })
// console.log(result);

//Reduce

// const arr=[1,2,3,4,5];
// const returned=arr.reduce((prev,current)=>{
//     console.log('prev',prev);
//     console.log('current',current);
//     return prev+current;
// },4);
// console.log(returned);

// const arr=[1,2,3];
// const returned=arr.reduce(function(prev,curr){
//     return ((prev*curr)-prev)
// },100)
// console.log(returned);

// const arr=[7,11,18];
// const  returned=arr.reduce(function(p,c){
//     if(c>p){
//         return c;
//     }
//     return p;
// },12);
// console.log(returned);

// const arr=[7,11,18];
// const  returned=arr.reduce(function(p,c,index,completeArray){
//     console.log(`${p},${c},${index},${completeArray}`);
// });
// console.log(returned);


// const arr=[7,11,18];
// const  returned=arr.reduce(function(p,c,index,completeArray){
//     if(p){
//         return completeArray.length+index;
//     }
//     else{
//         return !c;
//     }
// },20);
// console.log(returned);

//prototype

// function customEvery(arr,cb){
//    for(let i=0;i<arr.length;i++){
//     if(!cb(arr[i])){
//         return false;
//     }
//    }
//    return true;
// }

// function customEvery(arr,cb){
// }
// const arr=[2,4,6,9];
// const ans2=customEvery(arr,(val)=>{
//     //  return !(val%2);
//     return 2;
// });
// console.log(ans2);

// const ans1=arr.every((val)=>{
// //    return !(val%2);
// return 2;
// })
// console.log(ans1); 

// const reply=[2,4,6,8,10,20,30].map((val,index)=>{
//     return !val;
// })
// console.log(reply);

// const arr=[2,4,6,8,10,20,30];
// const reply2=customMap(arr,(val,index)=>{
//    return val+10;
// })

// function customMap(arr,cb){
//     const tempInternalArray=[];
//     for(let i=0;i<arr.length;i++){
//        const  returncallbackValue=cb(arr[i],i);
//        tempInternalArray.push(returncallbackValue);
//     }
//     return tempInternalArray
// }
// console.log(reply2);

//Math.ceil

// console.log(Math.ceil(3.2));
// console.log(Math.ceil(3.002));

//Math.floor

// console.log(Math.floor(3.002));
// console.log(Math.floor(3.999999));

//Math.abs

// console.log(Math.abs(-40));
// console.log(Math.abs(40));

//Math.random

// console.log(Math.random());

// console.log(Math.floor(Math.random()*(90-10))+10);

// const max=90;
// const min=10;
// Math.floor((Math.random()*(max-min))+min+1);

//Math.sqrt

// console.log(Math.sqrt(7));

//Math.pow

// console.log(Math.pow(3,2));


//for of

// for(let a of [2,4,'gh',68]){
//     console.log(a);
// }

//for in

// const obj={name:'vikram',age:27};
// for(let a in obj){
//     console.log(obj[a]);
//     console.log(a);
// }


//Dynamic objects

// const a='name';
// const value='vikram';
// const obj={};

// obj[a]=value;
// console.log(obj);

// obj.a=value;
// console.log(obj);

// let obj2={name:'vikram',age:27};
// obj2.gender='male';
// console.log(obj2);

// obj2['add']='delhi';
// console.log(obj2);

// obj2[add]='delhi';
// console.log(obj2);

// function testFunc(key,value,obj){
//     obj.key=value;
//     return obj;
// }
// const obj=testFunc('name','vikram',{});
// console.log(obj);


// let obj={name:'vikram',age:27};
// for(let a in obj){
// //     console.log(obj[a]);
// //     console.log(a);

// // console.log(obj['name']);
// // console.log(obj['age']);
// console.log(obj[a]);
// console.log(obj.name);
// console.log(a);
// }

// const obj={name:'vikram',age:27};
// for(let a of Object.keys(obj)){
//     console.log(a);
//     console.log(obj[a]);
// }

//Object.keys()

// console.log(Object.keys(obj));

//Object.values()

// console.log(Object.values(obj));

//Object.entries()

// console.log(Object.entries(obj));

//Destructing in objects

// const arr=['vikram',27];
// const[a,b]=arr;
// console.log(a,b);

// const obj={name:'vikram',age:27};
// const obj2={age:27,name:'vikram'};

// console.log(obj.name);
// console.log(obj2.name);

// const{ag,nm}={age:27,name:'vikram'};
// console.log(ag);
// console.log(nm);

// const{age,name,address}={age:27,name:'vikram'};
// console.log(age);
// console.log(name);
// console.log(address);

// const{age}={age:27,name:'vikram'};
// console.log(age);

// function sample(){
//     return {random: Math.random()}
// }
// const {ran}=sample();
// console.log(ran);

// const random=10;
// function sample(){
//     return {random:Math.random()}
// }
// const  {random: newVariable}=sample();
// console.log(random);
// console.log(newVariable);

//includes

// const arr=[1,2,3,4,5];
// console.log(arr.includes(1));

// const strArr=['vikram','vallala'];
// console.log(strArr.includes('vikram'));

// const arr=[['name','vikram'],['age',27],['add','warangal']];
// const makeArrObj=(arr)=>{
//     const obj={};
//     arr.reduce((prev,curr)=>{
//         const[key,val]=curr;
//         prev[key]=val;
//         return prev;
//     },obj);
//     return obj;
// }
// const newObj=makeArrObj(arr);
// console.log(newObj);


// const something=[2,4,6,8].toString();
// console.log(something);
// const obj={};
// console.log(obj.toString(''));
// console.log(obj.join);

//sort

// const numbArr=[100,20,500,200,400,5];
// numbArr.sort();
// console.log(numbArr);

// const numbArr=[100,20,500,200,400,5];
// const ascending=(a,b)=>{
//     console.log(a);
//     console.log(b);
//     return a-b;
    
// } 
// const decending=(a,b)=>{
//     console.log(a);
//     console.log(b);
//     return b-a;
// }
// numbArr.sort(ascending);
// console.log(numbArr);

// function hof(){
//     const a=20;
//     var random=()=>{
//         return 'I am a variable';
//     }
//     return random();
//     function random(){
//         return 'I am a function';
//     }
// }
// const answer=hof();
// console.log(answer);

// function hof(){
//     const a=20;
//     var random=10;
//     return random();
//     function random(){
//         return 'I am a function';
//     }
// }
// const answer=hof();
// console.log(answer);

// function hof(){
//     const a=20;
//     return random();
//     function random(){
//         return 5;
//     }
//     function random(){
//         return 10;
//     }
// }
// const answer=hof();
// console.log(answer);