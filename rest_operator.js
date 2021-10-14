/*function myFunction(v, w, x, y, z) { 
    console.log(w)
}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);*/

//0


var arr1=[1,2,3,4,5]
var [a,b,...res] = arr1
console.log(a)
console.log(b)
console.log(res)

//output:1 2 [3,4,5]