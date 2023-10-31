// const  box=document.getElementById('box');
// const cbButton=document.getElementById('cb');
// const ccButton=document.getElementById('cc');
// const colors=['red','blue','orange','green','yellow','purple'];

// function getRandomColor(){
//     return colors[Math.floor(Math.random()*colors.length)];
// }

// cbButton.addEventListener('click',()=> {
//     box.style.backgroundColor=getRandomColor();
// })

// ccButton.addEventListener('click',()=>{
//     box.style.color=getRandomColor();
// })

// const Users=[
//     {
//         name:'vikram',
//         age:27,
//         gender:'m',
//         address:'warangal'

//     },
//     {
//         name:'Rajat',
//         age:20,
//         gender:'m',
//         address:'bangalore'
//     },
//     {
//         name:'Shreya',
//         age:20,
//         gender:'f',
//         address:'tamilnadu'
//     },
//     {
//         name:'Tanvi',
//         age:10,
//         gender:'f',
//         address:'chattisgarh'
//     },
//     {
//         name:'Dilip',
//         age:36,
//         gender:'m',
//         address:'plo'
//     },
// ]

// const displayUsersArea=document.querySelector('#displayUsers')

// for(let user of Users){
//     const tempParentDiv=document.createElement('div');
//     const tempH1=document.createElement('h1');
//     const tempDiv1=document.createElement('div');
//     const tempDiv2=document.createElement('div');
//     const tempDiv3=document.createElement('div');

//     tempH1.innerText=user.name.toUpperCase();
//     tempDiv1.innerText=`age-${user.age}`;
//     tempDiv2.innerText=`gender-${user.gender==='m'?'Male':'Female'}`;
//     tempDiv3.innerText=`address-${user.address}`;

//     tempParentDiv.append(tempH1);
//     tempParentDiv.append(tempDiv1);
//     tempParentDiv.append(tempDiv2);
//     tempParentDiv.append(tempDiv3);
//     displayUsersArea.append(tempParentDiv);
// }