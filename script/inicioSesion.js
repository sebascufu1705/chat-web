const iniciar = document.querySelector('.login');

iniciar.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = iniciar.name.value;
  const password = iniciar.password.value;

  firebase.auth().signInWithEmailAndPassword(name, password)
  .then(function () {

    window.location.href = 'index.html';

  })
  .catch(function(error) {
    // Handle Errors here.
    console.log(error)

    iniciar.querySelector('.form__error').classList.remove('hidden');
    // ...
  });
});
