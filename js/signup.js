//following code takes inputs for login, and adds visual feedback based on input
const signupForm = document.getElementById("inputs");

signupForm.addEventListener("submit", async function(event){
    event.preventDefault();

    const firstnameInput = document.getElementById("first-name");
    const lastnameInput = document.getElementById("last-name");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const passwordConfirmationInput = document.getElementById("password-confirmation");


    const firstnameIcon = document.getElementById("firstname-icon");
    const lastnameIcon = document.getElementById("lastname-icon");
    const usernameIcon = document.getElementById("username-icon");
    const passwordIcon = document.getElementById("password-icon");
    const passwordConfIcon = document.getElementById("password-confirmation-icon");

    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const passwordConfirmation = passwordConfirmationInput.value;

    let valid = true;

    //first name validation
    if(!firstname){
        firstnameInput.classList.add("invalid");
        firstnameInput.classList.remove("valid");

        firstnameIcon.textContent = "❌";
        firstnameIcon.className = "icon-error";

        valid = false;
    } else{
        firstnameInput.classList.add("valid");
        firstnameInput.classList.remove("invalid");

        firstnameIcon.textContent = "✅";
        firstnameIcon.className = "icon-success";
    }

    //last name validation
    if(!lastname){
        lastnameInput.classList.add("invalid");
        lastnameInput.classList.remove("valid");

        lastnameIcon.textContent = "❌";
        lastnameIcon.className = "icon-error";

        valid = false;
    } else{
        lastnameInput.classList.add("valid");
        lastnameInput.classList.remove("invalid");

        lastnameIcon.textContent = "✅";
        lastnameIcon.className = "icon-success";
    }

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
    if (!password || !passwordConfirmation){
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        passwordConfirmationInput.classList.add("invalid");
        passwordConfirmationInput.classList.remove("valid");
    
        passwordIcon.textContent = "❌";
        passwordIcon.className = "icon-error";

        passwordConfIcon.textContent = "❌";
        passwordConfIcon.className = "icon-error";

        valid = false;
    } else {
        //TODO validate password with regex 
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");

        passwordConfirmationInput.classList.add("valid");
        passwordConfirmationInput.classList.remove("invalid");

        passwordIcon.textContent = "✅";
        passwordIcon.className = "icon-success";

        passwordConfIcon.textContent = "✅";
        passwordConfIcon.className = "icon-success";
    }

    if(!valid){
        document.getElementById("error-message").textContent = "❌ Please fill in all fields ❌";
        return;
    } else{
        document.getElementById("error-message").textContent = "";
    }

    //sign up data sent to API 
    const registerData = {
        firstName: firstname,
        lastName: lastname,
        login: username,
        password: password
    };

    try{
        const response = await fetch("/api/register.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(registerData)
        });

        const data = await response.json();

        console.log(data);

        if(data.id > 0){
            window.location.href = "dashboard.html";
        } else{
            document.getElementById("error-message").textContent = `❌ ${data.error} ❌`; //displays actual backend error
        }
    } catch(error){
        console.error(error);

        document.getElementById("error-message").textContent = "❌ Server error ❌";
    }
});