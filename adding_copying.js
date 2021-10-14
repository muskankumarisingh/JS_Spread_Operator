let namesArray = ['kumar','shwetha','komal'];
let arr2 = [...namesArray]; // using spread operator
console.log(arr2); // [ 'kumar', 'shwetha', 'komal' ]
arr2.push("Kunal"); // adding a new name
console.log(arr2); //[ 'kumar', 'shwetha', 'komal', 'Kunal' ]
console.log(namesArray); //[ 'kumar', 'shwetha', 'komal' ]
