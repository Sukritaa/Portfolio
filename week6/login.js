window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	 const urlParams = new URLSearchParams(queryString);
	 const username = urlParams.get('username');
	 const password = urlParams.get('password');

	 var Username = document.forms["myLogin"]["username"];
	 var Password = document.forms["myLogin"]["password"];

	 var Result = true;
	 if(username != Username.value ){
		 alert ("Invalid username");
		 Result = false;
	 }
	 if(password != Password.value){
		alert ("Invalid password");
		 Result = false;
	 }
	 if(Result == true){
		alert ("Login success");
	 }
	 return Result;
	 
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}
	