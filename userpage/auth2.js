auth.onAuthStateChanged(user => {
  if(user) {
    //console.log('user logged out');
    //document.location.href="./login.html";
    console.log('user logged in : ',user);
  }
  else{
    document.location.href="../index.html";

  }
});
