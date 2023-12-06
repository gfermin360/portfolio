document.addEventListener('DOMContentLoaded', function () {

  const dialog = document.querySelector("#dialog");

  const showButton = document.querySelector("#contactMeBtn");

  const closeButton = document.querySelector("#dialog_button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });



  //form -emailJS

  const btnSend = document.querySelector('#btn-send')
  const form = document.querySelector('#form')

  btnSend.addEventListener('click', function (e) {
    e.preventDefault()

    const serviceID = 'service_p62jy9e';
    const templateID = 'template_jydrlq8';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        window.alert('Sent!');
        form.reset()
        dialog.close()
      }).catch ((error) => {
        alert(JSON.stringify(error))
      })
  })

})