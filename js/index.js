const loginSide = document.getElementById("inputs");

loginSide.addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!username || !password){
        document.getElementById("error-message").textContent = "❌ Please fill in all the fields ❌";
    } else{
        document.getElementById("error-message").textContent = "";
    }
});