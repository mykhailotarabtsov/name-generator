document.querySelector('#generate-names').addEventListener('submit', loadNames);



// Execute the function to query the API
function loadNames(e) {
     e.preventDefault();


     // Read the values from the form and create the variables
     const origin = document.getElementById('country').value;
     const genre = document.getElementById('genre').value;
     const amount = document.getElementById('quantity').value;

     // Build the URL
     let url = 'http://uinames.com/api/?';
     // Read the origin and append to the url
     if(origin !== ''){
          url += `region=${origin}&`;
     }
     // Read the genre and append to the url
     if(genre !== ''){
          url += `gender=${genre}&`;
     }    
      // Read the amount and append to the url
     if(amount !== ''){
          url += `amount=${amount}&`;
     }

     // Fetch API

     fetch(url)
      .then( response => response.json() )
      .then( names => {
        let html = '<h2>Generated Names</h2>';
        html += '<ul class="list">';
        names.forEach( name => {
          html += `
            <li>${name.name}</li>
          `;
        });
        html += '</ul>';

        document.getElementById('result').innerHTML = html;
      })
      .catch( error => console.log(error))
     
}