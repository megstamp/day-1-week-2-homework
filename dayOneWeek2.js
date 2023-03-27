// 1. You are given the following "car" object:
 let myCar = {brand: "Toyota", 
                make: "Prius", 
                color: "red"
            }
// Please use destructuring to access the color property.

const {color} = myCar
console.log(color)




// 2. Write a function that converts hours into seconds. 
//Return the result. Invoke the function.

function convertHoursToSeconds(hours) {
    const min = hours * 60
    const sec = min * 60
    return sec; 
  }
  
  console.log(convertHoursToSeconds(5));

  //same as
  //const totalHours = convertWeeksToHours(5);
  //console.log(totalHours);


// 3. Practice making entity relationship diagrams by building one 
//for a pet store, either on paper or on a website such as draw.io. 
//Include a table for pets, owners, and services.