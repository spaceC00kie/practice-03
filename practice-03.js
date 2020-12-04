//given an array print out the items in the array using arrow functions and foreach

//define arrow function
const printDogs = (doggos) => {
  doggos.forEach((doggo) => {
    console.log(doggo);
  });
};

//define array
const doggos = ["staffy", "pomski", "mutt"];

//call the function and pass in arguments
printDogs(doggos);
