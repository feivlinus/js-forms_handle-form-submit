console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formFields = new FormData(form);
  const formDataObject = Object.fromEntries(formFields.entries());

  //For API
  //const formDataJsonString = JSON.stringify(formDataObject);
  //console.log(formDataJsonString);

  console.log(formDataObject);
  event.target.reset();
  event.target.elements.firstName.focus();

  //Bonus
  //I have found that with google 😅
  const age = parseInt(formDataObject.age, 10);
  const badness = parseInt(formDataObject.badness, 10);
  const ageBadnessSum = age + badness;
  console.log(ageBadnessSum);
});
