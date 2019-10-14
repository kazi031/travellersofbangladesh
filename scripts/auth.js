const signupForm = document.querySelector('#modal-content');
signupForm.addEventListener('submit' , (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm['email'].value;
  const password = signupForm['psw'].value;

  //signup the user

  auth.createUserWithEmailAndPassword(email,password).then(cred => {
    //console.log(cred.user);
    document.getElementById('modal-content').reset();
    setTimeout(function(){
      document.location.href="./index.html";
    },2000);
  });


});
