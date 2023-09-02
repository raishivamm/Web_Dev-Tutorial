// console.log('String');

// let lastName='Rai';

// let firstName = new String('Shivam');

// let date = new Date();
// let date2 = new Date('2 jan 1999 11:00');

// let numbers = [1,2,3,4,56];
// console.log(numbers.indexOf(56));
// console.log(numbers);
// numbers.push(9);
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);
// numbers.splice(3,0,'shivam');
// console.log(numbers);

//Object arrays
// Callback function

// let courses=[
//     {no:1,name:'Shivam'},
//     {no:2,name:'Rai'}
// ];

// function course(a){
//     return a.name=='Rai';
// }

// let findObj= courses.find(function(course){
//         // return course.name=='Rai';
//         console.log("Hello");
//     }
// )

// console.log(findObj);



const ages = [4, 12, 16, 20];

function checkAge(age) {
  return age > 12;
}
let a;
function myFunction() {
  a=ages.find(checkAge);
}
myFunction();
console.log(a);

console.log('shivam');












// console.log()

// Arrow function

// let courses=[
//     {no:1,name:'Shivam'},
//     {no:2,name:'Rai'}
// ];

// let findObj = courses.find(course =>course.name==='Rai');


