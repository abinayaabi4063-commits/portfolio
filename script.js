document.getElementById("myForm").addEventListener("submit", function(e){
e.preventDefault();
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let msg = document.getElementById("msg").value;

if(name=="" || email=="" || msg==""){
document.getElementById("error").innerText="Please fill all fields";
} else {
alert("Message Sent Successfully");
document.getElementById("error").innerText="";
this.reset();
}
});