function validate(){
    var user = document.getElementById("user").value
    var mails = document.getElementById("emailid").value
    var num = document.getElementById("phone").value
    var password = document.getElementById("password").value
    var confirmpassword = document.getElementById("confirmpassword").value
   

     var usercheck = /^([A-Za-z ]{5,15})[0-9]?$/
     var emailcheck = /^[a-zA-Z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,3}$/
     var numcheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     var passwordcheck =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
     var passwordcheck1 =  /^[a-zA-Z0-9]{8,16}$/
     var passwordcheck2 =  /^[a-zA-Z]{8,16}$/
    

    

   
   


    // // user   
     
       if(usercheck.test(user)){
         document.getElementById('username').innerHTML="";
       }else{
        document.getElementById('username').innerHTML="please enter a username of having characters minimum 5  and maximum 15 (can include numbers also)";
        return false
       }
     
      //  mail

      if(emailcheck.test(mails)){
         document.getElementById('mailsp').innerHTML="";
       }else{
        document.getElementById('mailsp').innerHTML="enter a valid email address";
        return false
       }
    
     
       
        
    // //  phonenumber

       if(num==""){
         document.getElementById('numbersp').innerHTML="please enter a phone number"
        return false
      }
     
      if(numcheck.test(num)){
         document.getElementById('numbersp').innerHTML="";
       }else{
        document.getElementById('numbersp').innerHTML="enter a valid number";
        return false
       }
    


      // password1
      
       if(password==""){
        
        document.getElementById('passworderror2').innerHTML="please fill the password"
         return false
      }
        if(passwordcheck2.test(password)){
        document.getElementById('passworderror2').innerHTML="**weak password(include special characters,numericals)" 
       return false
      }
      if(passwordcheck1.test(password)){
        document.getElementById('passworderror1').innerHTML="**medium password (include special characters)"
          return false
        }
       if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML="**strong password"
        
       } 
       else{
         document.getElementById('passworderror2').innerHTML="enter a password (8-16 characters,special characters,numericals)";
         return false}
        

         
    
       
       

     
      //  confirm password
      if(confirmpassword==""){
        
         document.getElementById('confirmpassworderror').innerHTML="please fill the password";
         return false;}
      
       
       if(password!=confirmpassword){
        document.getElementById('confirmpassworderror').innerHTML="entered password is not matching"
        return false
      }
       
alert("account creation successful")

    }


function myFunction() {
      var x = document.getElementById("confirmpassword");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
