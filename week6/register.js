window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
function validateForm() {
    var lastName = document.forms["myForm"]["lastname"];
    var Gender = document.forms["myForm"]["gender"];
    var Birthday = document.forms["myForm"]["bday"];
    var Email = document.forms["myForm"]["email"];
    var Username = document.forms["myForm"]["username"];
    var Password = document.forms["myForm"]["password"];
    var require = document.getElementById("errormsg");   
    var result = true;
   
    if (lastName.value == ""){
        require.innerText = "require your Lastname";
        result = false;
    }
    else if (Gender.value == ""){
        require.innerText = "require your Gender";
        result = false;
    }
    else if (Birthday.value == ""  ){
        require.innerText = "require your Birthday";
        result = false;
    }
    else if (Email.value == "" ){
        require.innerText = "require your Email";
        result = false;
    }
    else if (Username.value == "" ){
        require.innerText = "require your Username";
        result = false;
    }
    else if (Password[0].value != Password[1].value ){
        require.innerText = "Invalid password";
        result = false;
    }    
        return result; 
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}