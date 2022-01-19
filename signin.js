
function formSubmit(){
    var userStack=JSON.parse(localStorage.getItem("userData"))||[];
    var mobile=document.querySelector(".num").value;
    console.log(mobile);
    var usermob={
        mobileNo:mobile,
    };
    userStack.push(usermob);
    console.log(userStack);
    localStorage.setItem("userData",JSON.stringify(userStack));
};