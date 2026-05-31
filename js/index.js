//following code takes inputs for login, and adds visual feedback based on input
const loginSide = document.getElementById("inputs");

loginSide.addEventListener("submit", async function(event){
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const usernameIcon = document.getElementById("username-icon");
    const passwordIcon = document.getElementById("password-icon");

    const username = usernameInput.value;
    const password = passwordInput.value;

    let valid = true;

    //username validation
    if(!username){
        usernameInput.classList.add("invalid");
        usernameInput.classList.remove("valid");

        usernameIcon.textContent = "❌";
        usernameIcon.className = "icon-error";

        valid = false;
    } else{
        usernameInput.classList.add("valid");
        usernameInput.classList.remove("invalid");

        usernameIcon.textContent = "✅";
        usernameIcon.className = "icon-success";
    }

    //password validation
    if(!password){
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        passwordIcon.textContent = "❌";
        passwordIcon.className = "icon-error";

        valid = false;
    } else{
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");

        passwordIcon.textContent = "✅";
        passwordIcon.className = "icon-success";
    }

    if(!valid){
        document.getElementById("error-message").textContent = "❌ Please fill in all fields ❌";
        return;
    } else{
        document.getElementById("error-message").textContent = "";
    }

    //login data sent to API 
    const loginData = {
        login: username,
        password: password
    };

    try{
        const response = await fetch("/api/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        console.log(data);

        if(data.id > 0){
            localStorage.setItem("id", data.id); //saves id to browser's local storage 
            window.location.href = "dashboard.html";
        } else{
            document.getElementById("error-message").textContent = "❌ Invalid username of password ❌";
        }
    } catch(error){
        console.error(error);

        document.getElementById("error-message").textContent = "❌ Server error ❌";
    }

});