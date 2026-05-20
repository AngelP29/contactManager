const loginSide = document.getElementById("inputs");

loginSide.addEventListener("submit", function(event){
    event.preventDefault();

    const firstname = document.getElementById("first-name").value;
    const lastname = document.getElementById("last-name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!firstname || lastname || !username || !password){
        document.getElementById("error-message").textContent = "❌ Please fill in all the fields ❌";
    } else{
        document.getElementById("error-message").textContent = "";
    }
});