// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

 function calNewBonus(array) { 
  let newList = [];

  for(let i = 0; i < array.length; i++){
    
  let newBonus = {
      name: '',
      bonusPercentage: 0,
    }
   
    newBonus.name = array[i].name;
    newList.push(newBonus);

   if (array[i].reviewRating <= 2) {
    newBonus.bonusPercentage = 0.00;
   } else if (array[i].reviewRating === 3) {
    newBonus.bonusPercentage = 0.04;
   } else if (array[i].reviewRating === 4){
    newBonus.bonusPercentage = 0.06;
   } else if (array[i].reviewRating === 5) {
    newBonus.bonusPercentage = 0.10;
   }
   if(array[i].employeeNumber.toString().length === 4 || 5 && array[i].reviewRating > 2) {
    newBonus.bonusPercentage += 0.05;
   }
   if(array[i].annualSalary > 65000 && array[i].reviewRating > 2) {
    newBonus.bonusPercentage -= 0.01;
   }
   if (newBonus.bonusPercentage > 0.13) {
    newBonus.bonusPercentage = 0.13;
  }
   //return new object with bonus results
   newBonus.totalBonus = Math.floor(array[i].annualSalary *(newBonus.bonusPercentage));
   newBonus.totalCompensation = Math.floor(array[i].annualSalary *(newBonus.bonusPercentage +1));
  }
  return newList;
}
 console.log(calNewBonus(employees));




//   let bonusArray = [];
//   for(let people of employees){
//     if(employee[i].reviewRating < 2){
//       return employee[i] + 0 
//     }
//   }
  
// }
  // your logic here
// function calBonus( array ) {  
//   // your logic here
//   let newList = [];

//   let newBonus = {
//     name:'',
//     bonusPercentage: 0,
//     totalCompensation: 0
//   }



// //   let newBonus = {
// //     name:'',
// //     annualSalary: 0,
// //   }
// //     newBonus[i].name = array[i].name;
// //     newList.push(newBonus);
// // }
// // for(let i = 0; i < employees.length; i++)
// console.log(calBonus(employees));

// if(array[i].reviewRating <= 2){
//   newBonus.bonusPercentage = 0;
//   newList.push(array[i]);

   //else if (){
   // employees[i].annualSalary *