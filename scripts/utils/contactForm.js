//Function ouverture modal
function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

  //Dom modal contact
  let modalContact = document.getElementById('Contact');

  //Modification du H2 modal contact
  const actualName = document.querySelector('.info h2').innerText;
  modalContact.innerText = ` Contactez-moi ${actualName}`;


  //Dom form submit BTN
  const submitButton = document.getElementsByClassName('contact_button');
  submitButton[1].addEventListener('click', submitForm);

}

//Function fermeture modal
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

//Function lors du submit du Form
function submitForm(event){
    //Dom Form
    let form = document.getElementsByName('contact');
    form = form[0];
    if (validation()){
      form.reset();
      closeModal();
      event.preventDefault();
    } else {
      event.preventDefault();
    }
}

//Function validation prénom
function validateFirstName(firstNameValue){
  if (firstNameValue.length >= 2 && firstNameValue.match(/^[a-zA-Z]+$/)) {
    console.log(firstNameValue)
    return true;
  } else {
    const firstNameInput = document.getElementById('firstname');
    firstNameInput.style.border = '2px solid red';
  }
}

//Function validation nom
function validateLastName(lastNameValue){
    if (lastNameValue.length >= 2 && lastNameValue.match(/^[a-zA-Z]+$/)) {
    console.log(lastNameValue)
    return true;
  } else {
    const lastNameInput = document.getElementById('lastname');
    lastNameInput.style.border = '2px solid red';
  }
}

//Function validation email
function validateEmail(emailValue){
  if (emailValue.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    console.log(emailValue)
    return true;
  } else {
    const emailInput = document.getElementById('email');
    emailInput.style.border = '2px solid red';
  }
}

//Function validation message
function validateMessage(messageValue){
  if (messageValue.length > 1) {
    console.log(messageValue)
    return true;
  } else {
    const messageInput = document.getElementById('message');
    messageInput.style.border = '2px solid red';
  }
}

//Function general de la valdiation
function validation(){
  //Dom Form Input
  const firstNameInput = document.getElementById('firstname');
  const lastNameInput = document.getElementById('lastname');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  if (validateFirstName(firstNameInput.value) && validateLastName(lastNameInput.value) && validateEmail(emailInput.value) && validateMessage(messageInput.value)) {
    return true;
  }
}
