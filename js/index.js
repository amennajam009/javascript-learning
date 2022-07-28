console.log('hello world');


var b ='hi my name is amen';
 console.log(b);

 var b = prompt(' whats your age');
 console.log(b);

document.getElementById('text') .innerHTML = b;
number in js
var num1 = 10;

num1= 10*2+4;
console.log( num1);


//how can we add 2 number in function 

function sumnumbers( num1,num2){
        var result= num1+num2;
        console.log(num1+num2);
}
sumnumbers(10,20);

//var num= 0;
while (num < 100){
        num+= 1;
      console.log(num);
   
}

var num=0;
while( num < 20){
num+=2;
console.log(num);
}



for (num=1; num<=50 ; num++){
        console.log(num);
}


strings in javascript
common method of strings
let fruit='bananan,orange,apple,mango,blackberry,cherry';
let morebanana='banana\nmango'; //new line
console.log(morebanana.length);
console.log(fruit.slice(2,4));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt('4'))
console.log(fruit.split(',')) //split by comma
console.log(fruit.split('')) //split by character


//arrays

let fruits=['bananan','orange','apple','mango','blackberry','cherry'];
fruits=new Array( 'bananan','orange','apple','mango','blackberry','cherry'); //another way to declare the array!
 console.log(fruits[0]);

 //we can also change the data into the array like

 fruits[3] = 'keeper';
 console.log(fruits);

 for(let i=1;  i < fruits.length; i++ ){
  console.log(fruits[i]);
 } 

 //common methods of array 
 console.log('to string', fruits.toString());
 console.log(fruits.join('-'));//sb may hifen add krdy ga
 console.log(fruits.pop(), fruits); // last walay ko remove krdy ga
 console.log(fruits.push('amen'),fruits); // add krta hai agr hum .push dein toh 
 console.log(fruits.shift(), fruits); //first element ko udaa deta hai means del krdeta hai 
 console.log(fruits.unshift('hello world'), fruits); //first element ko add krdta hai  

 //agr hum dhusra var lety han or humny usko b jorna or phly var k sth toh tb hum yeh use krty han 
 let vegetables=['tomato','potato','ladyfinger','chilli'];
 let allgrocries=fruits.concat(vegetables);
 console.log(allgrocries);
 console.log(allgrocries.reverse()); //to reverse all the items
 console.log(allgrocries.sort());


 let somenumber=[10,9,8,7,6,5,4,3,2,1];
 console.log(somenumber.sort(function(a,b){return a-b})); //to write these number in ascending order
 console.log(somenumber.sort(function(a,b){return b-a})); // to write these numbers in decending order be like

 let emptyarray=[];

 for(let num=0; num<=10; num++){
     emptyarray.push(num);
 }

console.log(emptyarray);


//objects in javascript

let student={
  first:'amen',
 last:'najam',
  age:20,
  haircolor:'black',
  studentInfo:function(){
    return this.first + '\n' + this.last + '\n' + this.haircolor + '\n' + this.age;
  }
};
console.log(student);
console.log(student.first);
console.log(student.last);

student.first='not amen';
console.log(student.first);

student.age++;
console.log(student.age);

console.log(student.studentInfo()); 

//IF Else statement

var age=prompt('what your age');
if((age>=18) && (age<=35)){
  statusbar='you can enroll in it';
  console.log(statusbar);
} 
else{
  statusbar='you are way too older to enroll in it';
  console.log(statusbar);
}


//Here we Go to learn about switch statement

switch(3){
 
  case 0:
    Text='weekend'
    break;

    case 5:
      Text='weekend'
      break;

      case 6:
        Text='weekend'
        break;
      default:
        Text='weekday'
        break;

}
console.log(Text);




// example of If else statement
 

var age=prompt('what is your age');

if((age>=18) && (age<=35)){
  statusbar='you can be there';
  console.log(statusbar);
}
else{
  statusbar='you are older enough to be there';
  console.log(statusbar);
}


//switch statement.....:)

switch(0){
   
  case 0:
    Text='weekend'
    break;

  case 5:
    Text='weekend'
    break;
    
  case 6:
    Text='weekend'
    break;
    
  default:
    Text='weekday'
    break;
}

console.log(Text);



//let card=(num1)=>{

//  return num1+num1+num1*num1;

//}

//console.log(card(2))


//let fuckincards = (num1) => {
//  if( num1 ===1){
   // console.log('you have entered num 1');
//  }

//  else if(num1===2){
    //console.log('you have enetered num2');
//  }
//  else if( num1===3){
//    console.log('you have entered num3');
//  }
//  else{//
    //console.log(`you have entered ${num1}`);
//  }
//}
//fuckincards(0);
//


//stricked comparison check.....

//let wholething = (yehwala) => {
 
//  if( yehwala===1){
//    console.log('wow amen you entered 1');
//  }
// else if( yehwala===2){
//  console.log('wow amen you have entered 2');
// }
// else if( yehwala===4){
//  console.log('wow yoo bitch you entered the 4th one');
// }
// else {
//  console.log(`you just entered the first one ${yehwala}`);
// }

//}

//wholething(1);

//greater wala krny lgy han 

//hum krny lgy han example of grqual to ot less then equal to... :)

let yourage=(umar)=>{
  if(umar<=18){
    statusbar='tum apply krsakty ho';
    console.log(statusbar);
  }
  else if(umar >= 35){
    statusbar='tum apply nai krsakty ho';
    console.log(statusbar);
 }
 else{
  statusbar='tum apply nai krsakty ho';
  console.log(statusbar);
}
}
yourage(37);



//evenodd function...
let evenoddnumber=(num1)=>{
 try {
   // pura ka pura logic ayega
    if( num1%2 ===0){
      console.log('your number is Even');
    }
    else if(num1%2 !==0){
    console.log('your number is Odd');
    }
      
    
  } catch (error) {
    //edhr humay woh error bta dyga

    console.log(error.message);
  }
}
evenoddnumber(6);
//mai chahti hun k 1 sy ly k 2o tk jitny number han uhn may sy jitny b vene aty han usy may sy bss even he show hon mjyy


for(num1=1; num1<=20;num1++){
  num1++
  console.log(num1);
  if(num1%2===0){
    statusbar='odd one'
    console.log(num1);
  }
}

let Student = {
  name:'amen',
  age:20,
  grade: 12,
  haircolor:"black"
}

let amenprocess=(studentobject)=>{
console.log(studentobject);
}
amenprocess(student);


let amenkiinfo={
  name:'amen',
  age:20,
  favouriteband:'21 pilots',
  height:5
}

let processwala=( studenamenkiinfowalafunction)=>{
  console.log(studenamenkiinfowalafunction);
}
processwala(amenkiinfo);