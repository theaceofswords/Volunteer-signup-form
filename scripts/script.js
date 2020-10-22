

const volform=document.getElementById("volform");
var option1=document.getElementById("newfeild1");
var id=document.getElementById("newfeild");

 function show() {
     if(option1.value=="yes") id.style.visibility="visible";
     else id.style.visibility="hidden";

}


onsubmit=show();


volform.addEventListener('submit', (event)=> {
        event.preventDefault();
        volform.submit();
        alert("The form was submitted \n Thank you");
    }

)