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
      event.preventDefault();
      form.reset();
      closeModal();
    }
}

//Function validation prénom
function validateFirstName(firstNameValue){
  if (firstNameValue.length >= 2 && firstNameValue.match(/^[a-zA-Z]+$/)) {
    console.log(firstNameValue)
    return true;
  }
}

//Function validation nom
function validateLastName(lastNameValue){
    if (lastNameValue.length >= 2 && lastNameValue.match(/^[a-zA-Z]+$/)) {
    console.log(lastNameValue)
    return true;
  }
}

//Function validation email
function validateEmail(emailValue){
  if (emailValue.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    console.log(emailValue)
    return true;
  }
}

//Function validation message
function validateMessage(messageValue){
  if (messageValue.length > 1) {
    console.log(messageValue)
    return true;
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
