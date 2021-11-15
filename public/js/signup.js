

const signUpFrom = document.getElementById('signup-form');
console.log(signUpFrom);

const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');

signUpFrom.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = signupUsername.value;
    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    const confirmPassword = signupPasswordConfirm.value;

    console.log(username);
    console.log(name);
    console.log(email);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    //new comment

    const newMemberData = {
        'name' : name,
        'username' : username,
        'email' : email,
        'password' : password,
    } 

    fetch('api/users/signup', {
        method: 'POST',
        JSON: true,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, username, email, password})
    }).then((response)=>{
        if(response.ok){
            document.location.replace('/')
        } else{
            alert('fails to sign up')
        }
    }).catch((err) =>{
        console.log(err);
    });
});