
function myvalue(){
    var fullname=document.getElementById('name').value;
    console.log(fullname)
    var fullname=document.getElementById('pwd').value;
    console.log(fullname)
    var fullname=document.getElementById('email').value;
    console.log(fullname)
    var fullname=document.getElementById('address').value;
    console.log(fullname)
    var fullname=document.getElementById('phone').value;
    console.log(fullname)
    var fullname=document.getElementById('male').value;
    console.log(fullname)
}

document.getElementById('submitbutton').addEventListener('click',myvalue);





// input 
function focusFunction(element){
   element.style.background="lime";
}