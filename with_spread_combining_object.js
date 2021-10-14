// with a spread operator
var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars=Object.assign({},mynewCar,myOldCar)
var allCars={...mynewCar,...myOldCar}
console.log(allCars);
