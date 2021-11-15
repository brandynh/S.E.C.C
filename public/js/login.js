const loginFrom = document.getElementById('login-form');
// console.log(loginFrom);

const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
// const signupName = document.getElementById('signupName');
// const signupEmail = document.getElementById('signupEmail');
// const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');

loginFrom.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = signupUsername.value;
    // const name = signupName.value;
    // const email = signupEmail.value;
    const password = signupPassword.value;
    // const confirmPassword = signupPasswordConfirm.value;

    console.log(username);
    // console.log(name);
    // console.log(email);
    // console.log(email);
    console.log(password);
    // console.log(confirmPassword);

    const newMemberData = {
        // 'name' : name,
        'username' : username,
        // 'email' : email,
        'password' : password,
    } 

    fetch('api/users/login', {
        method: 'POST',
        JSON: true,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then((response) =>{
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }).catch((err) =>{
        console.log(err);
    });

    
});