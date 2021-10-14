//Cleaning up repeated elements from an array with a spread operator
/*let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
let mySet = new Set(array1)
myNewArray = [...mySet]
console.log(myNewArray)*/
//[ 1, 2, 3, 4, 6 ]

let arr1=[1,2,3,2,1,4,5,4,5,6,7,7,6];
let arr2=new Set(arr1)
arr3=[...arr2]
console.log(arr3)
