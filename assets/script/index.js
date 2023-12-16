'use strict';

// Dialog
const btnJoinNow = document.querySelector('.btn-join-now');
const dialog = document.querySelector('dialog');
const closeModal = document.querySelector('span');

btnJoinNow.addEventListener('click', () => {
    dialog.showModal();
});

closeModal.addEventListener('click', () => {
    dialog.close()
});

dialog.addEventListener('click', function(e) {

    const rect = this.getBoundingClientRect();
   
    if (e.clientY < rect.top || e.clientY > rect.bottom ||
        e.clientX < rect.left || e.clientX > rect.right) {
            dialog.close();
        } 
});


//  Get Ramdum User

/*
	Fetch API

	fetch makes use of JavaScript Promises. The initial promise return a 
	response object, which contains the full HTTP response, including the
	the body, headers, status code, CORS type, and URL. With the response
	returned, you can then use an additional parsing method to parse
	the body of the response.
*/


// Random user generator API is a free, open-source API for generating random
// user data. Like 'lorem ipsum', but for people.

const URL = "https://randomuser.me/api/?nat=CA&results=10&seed=same";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  mode: "cors",
};


// in this example I am using the json() method to parse the body as Json.
//Note that despite the method being called json(), the result is not json but is
//intead the result of taking JSON as input and parsing it to produce a
//JavaScript object.


fetch(URL, options)
  .then((response) => response.json())
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);