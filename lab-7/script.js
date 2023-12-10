/** This function is used to retrieve the bean types from the counters array
 *  and return an array of bean types.
 * @param {Array} counters - An array of objects in the counters.js file, which contains
 * the information of the counters.
 * @returns - An array of bean types.
 */
function retrieveBeanTypes(counters) {  // pass-in the counters array
     // Create an empty array to store the bean types after the retrieval
     const beanTypes = [];
     // Loop through the counters array by using the forEach method
     counters.forEach(counter => {
          if (beanTypes.includes(counter.bean) === false) {  // check if the bean type is already in the beanTypes array or not
          beanTypes.push(counter.bean);  // if not, use the push method to add the new bean type into the end of the beanTypes array
          }
     });
     return beanTypes;  // After the loop, return the beanTypes array
}

/** This function takes the counters array and sort all the beans' name by the alphabetical order.
 *  then return the sorted array.
 * @param {Array} counters - An array of objects in the counters.js file, which contains
 * the information of the counters.
 * @returns - An array of objects that sorted by the alphabetical order of the beans' name.
 */
function sortCountersByName(counters) {  // Create a function called sortCountersByName and accept the counters array as a parameter
     return counters.sort((a, b) => {  // Typical way to use the sort method to sort an array of objects by a property(a.name)
          if (a.name < b.name) {   // Basically, it's comparing the name of two objects and return the result.
               return -1;          // If the first object's name is smaller than the second one, return -1. Otherwise, return 1.
          } if (a.name > b.name) {
               return 1;
          }
          return 0;  // If the two objects are sharing a same name, then return 0.
     });
}


/** This function compare all the bean type in the counters.js with the retieved bean type in the beanTypes array.
 * And filtered them by their types, which will be returned and used to create the bean list.
 * @param {Array} counters - An array of objects in the counters.js file, which contains
 * the information of the counters.
 * @param {Array} beanType - An array of bean types that retrieved from the counters array, which contains
 * the unique bean types.
 * @returns - An array of objects that filtered by the bean types.
 */
function filterCountersByBeanType(counters, beanType) {
     return counters.filter(counter => counter.bean === beanType);
}

// // We can also use the oldscool way to write the filterCountersByBeanType function
// function filterCountersByBeanType(counters, beanType) {
//      return counters.filter (counter) {
//           return counter.bean === beanTypes;
//      }
// }

/** This function takes the counters array and calculate the total number of the beans.
 * Then return the total number.
 * @param {Array} counters 
 * @returns - The total number of the beans.
 */
function totalBeanCount(counters) {
     // By using the reduce method, we can accumulate the total number of the beans.
     // We let the accumulator start from 0 and add the count of each counter to the accumulator.
     return counters.reduce((accumulator, counter) => accumulator + counter.count, 0); 
}

/** This function takes the counters array and create the bean list by inserting the HTML elements into the DOM.
 *  The HTML page contains the total number of a certain bean type and the total number of all the beans.
 *  In the bean list, all the beans are sorted by their name in the alphabetical order.
 *  And display each bean's total number.
 * @param {Array} counters 
 */
function createBeanList(counters) {
     const beanTypes = retrieveBeanTypes(counters);  // We use the beanType to access the distinct bean types in the counters array.
     const ol = document.createElement('ol');  // Create an ordered list element to store the bean list.

     beanTypes.forEach(beanType => {  // Loop through the beanTypes array by using the forEach method
          let filteredBeans = filterCountersByBeanType(counters, beanType);  // Declare a variable to store the filtered beans by their types.
          
          filteredBeans = sortCountersByName(filteredBeans);  // Sort the filtered beans by their name in the alphabetical order.
          
          // Declare a variable to store the total number of the filtered beans.
          const totalFilteredBeans = filteredBeans.reduce((total, counter) => total + counter.count, 0);

          // Declare a variable to store the HTML elements that will be inserted into the DOM.
          let beanItemList = `<h2>${beanType}(${totalFilteredBeans})</h2> <ol>`;

          // Loop through the filtered beans by using the forEach method and add the HTML elements into the beanItemList variable.
          filteredBeans.forEach(counter => {
               // In the HTML page, each bean's name and total number will be  displayed in a list item.
               beanItemList += `<li>${counter.name} (${counter.count}) </li>`;  
          });

          beanItemList += `</ol>`;  // Adding the closing tage of the ordered list element after the loop.
          ol.innerHTML += beanItemList;  // Insert the beanItemList into the ordered list element.
     });

     const container = document.getElementById('beans');  // Get the element that contains all the bean list.
     container.appendChild(ol);  // Append the ordered list element into the container element.
}

// Call the function to list all the beans in the right type and order after the js file loaded
createBeanList(counters);