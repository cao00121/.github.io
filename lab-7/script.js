// Create a function to get bean types
function retrieveBeanTypes(counters) {
     const beanTypes = [];

     counters.forEach(counter => {
          if (beanTypes.includes(counter.bean) === false) {
          beanTypes.push(counter.bean);
          }
     });
     return beanTypes;
}

// Create a function to sort beans' names
function sortCountersByName(counters) {
     return counters.sort((a, b) => {
          if (a.name < b.name) {
               return -1;
          } if (a.name > b.name) {
               return 1;
          }
          return 0;
     });
}


// Create a function to count beans by type
function filterCountersByBeanType(counters, beanType) {
     return counters.filter(counter => counter.bean === beanType);
}

// Create a function to count the total number of beans by type
function totalBeanCount(counters) {
     return counters.reduce((accumulator, counter) => accumulator + counter.count, 0);
}

// Create elements to insert beans data
function createBeanList(counters) {
     const beanTypes = retrieveBeanTypes(counters);
     const ol = document.createElement('ol');

     beanTypes.forEach(beanType => {
          let filteredBeans = filterCountersByBeanType(counters, beanType);
          
          filteredBeans = sortCountersByName(filteredBeans);
          
          const totalFilteredBeans = filteredBeans.reduce((total, counter) => total + counter.count, 0);

          let beanItemList = `<h2>${beanType}(${totalFilteredBeans})</h2> <ol>`;

          filteredBeans.forEach(counter => {
               beanItemList += `<li>${counter.name} (${counter.count}) </li>`;
          });

          beanItemList += `</ol>`;
          ol.innerHTML += beanItemList;
     });

     const container = document.getElementById('beans');
     container.appendChild(ol);
}

// Call the function to list all the beans in the right type and order after the js file loaded
createBeanList(counters);