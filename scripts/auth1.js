auth.onAuthStateChanged(user => {
  if(user) {
    console.log('user logged in : ',user);
    setTimeout(function(){
      document.location.href="./userpage/index2.html";
    },1000);
  }
  else{
      console.log('user logged out');
  }
});
