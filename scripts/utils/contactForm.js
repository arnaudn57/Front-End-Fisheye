function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  const modalContact = document.getElementById('Contact');
  const namePhotographer = document.createElement('h2');
  const actualName = document.querySelector('.info h2').innerText;
  namePhotographer.textContent = actualName;
  modalContact.appendChild(namePhotographer);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
