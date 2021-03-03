// get. used for getting data/reading data. Uses url parameters.
// post insert new data. uses body for data.
// put. update data. uses body for data

//  Wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    // CREATE
  const createSubmitBtn = document.getElementById('create-form');

  if (createSubmitBtn) {
    createSubmitBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        burger_name: document.getElementById('burg').value.trim(),
        devoured: false,
      };

      // Send POST request to create a new quote
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('burg').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new burger!');
        location.reload();
      });
    });
  }

  



});