//Function ouverture modal
function listenerContact(){
  displayModal();
  closeModal();
}

function displayModal() {

  const contactBtn = document.getElementsByClassName('contact_button')[0];
  contactBtn.addEventListener('click', function(){
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

    //Dom modal contact
    let modalContact = document.getElementById('Contact');

    //Modification du H2 modal contact
    const actualName = document.querySelector('.info h2').innerText;
    modalContact.innerHTML = `Contactez-moi <br>${actualName}`;
    modal.children[0].setAttribute('aria-label', `Contact me ${actualName}`);

    //Dom form submit BTN
    const submitButton = document.getElementsByClassName('contact_button');
    submitButton[1].addEventListener('click', submitForm);
  });

}

//Function fermeture modal
function closeModal() {
  const closeBtn = document.getElementsByClassName('closeModalContact')[0];
  closeBtn.addEventListener('click', function(){
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  });
}

//Function lors du submit du Form
function submitForm(event){
    //Dom Form
    let form = document.getElementsByName('contact');
    form = form[0];
    if (validation() === true){
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
    hideErrorMessage('firstname', 'message-error-first-name');
    return true;
  } else {
    showErrorMessage('firstname', 'message-error-first-name');
  }
}

//Function validation nom
function validateLastName(lastNameValue){
    if (lastNameValue.length >= 2 && lastNameValue.match(/^[a-zA-Z]+$/)) {
    console.log(lastNameValue)
    hideErrorMessage('lastname', 'message-error-last-name');
    return true;
  } else {
    showErrorMessage('lastname', 'message-error-last-name');
  }
}

//Function validation email
function validateEmail(emailValue){
  if (emailValue.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
    console.log(emailValue)
    hideErrorMessage('email', 'message-error-email');
    return true;
  } else {
    showErrorMessage('email', 'message-error-email');
  }
}

//Function validation message
function validateMessage(messageValue){
  if (messageValue.length > 1) {
    console.log(messageValue)
    hideErrorMessage('message', 'message-error-message');
    return true;
  } else {
    showErrorMessage('message', 'message-error-message');
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
  validateFirstName(firstNameInput.value);
  validateLastName(lastNameInput.value);
  validateEmail(emailInput.value);
  validateMessage(messageInput.value);
}

function showErrorMessage(classInput, messageErrorClass){
   const messageInput = document.getElementById(`${classInput}`);
    messageInput.style.border = '2px solid #901c1c';

    const message_error_message = document.getElementsByClassName(`${messageErrorClass}`)[0];
    message_error_message.style.display = 'block';
}

function hideErrorMessage(classInput, messageErrorClass){
  const messageInput = document.getElementById(`${classInput}`);
    messageInput.style.border = 'none';

    const message_error_message = document.getElementsByClassName(`${messageErrorClass}`)[0];
    message_error_message.style.display = 'none';
}

export { listenerContact }
