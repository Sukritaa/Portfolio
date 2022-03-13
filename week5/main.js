function postFunction(){
    var comment = document.getElementById("text1").value;
    var topic1 = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    if(topic1.innerText == ""){
        topic1.innerText = comment;
    }
    else if(comment1.innerText == ""){
        comment1.innerText = comment;
        
    }
    else if(comment2.innerText == ""){
        comment2.innerText = comment;       
    }
    document.getElementById("text1").value = "";
}
function clearFunction(){
    topic1.textContent = "";
    comment1.textContent = "";
    comment2.textContent = "";
}