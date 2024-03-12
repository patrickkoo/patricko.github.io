function emailSend(){

    var userName = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
    "<br/> Phone " + password +
    "<br/> Email " + email;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "patrickmassoud07@gmail.com",
        Password : "7C34D56C0BDFD3128943DF4A46D97E6D93C9",
        To : 'pmass904@gmail.com',
        From : "patrickmassoud07@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if(message == 'OK' ) {
            swal("Successful", "Thank you for subscribing", "success");
        }
        else{
            swal("Error", "There was an error while submitting the form.", "error");
            
            
             
            
        }
      }
    );
}