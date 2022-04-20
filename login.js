

function validation(){
    var user = document.getElementById("user").value
    var password = document.getElementById("passwordlog").value

    var usercheck = /^([A-Za-z]{5,15})[0-9]?$/
    var emailcheck = /^[a-zA-Z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,3}$/
    var passwordcheck1 =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/


    // // user   
     
   if(usercheck.test(user)){
        document.getElementById('username').innerHTML=""
        return false}
        
        
        
      
       //  mail

       if(emailcheck.test(user)){
        document.getElementById('username').innerHTML=""
      
      
      }
      else{
       document.getElementById('username').innerHTML="invalid </br>(tip:no special character in username)"
       return false
      }
    
// password


     if(passwordcheck1.test(password)){
        document.getElementById('passworderror').innerHTML=""
         
         alert("successfuly logged in!!")
         return true
      } else{
        document.getElementById('passworderror').innerHTML="invalid password"
        return false
       } 
       
      
    }
