const logout = document.getElementById('logout');
// logout.addEventListener('click', ()=>{
//     fetch('api/user/', {
//         method: 'POST',
//         header: {'Content-Type': 'applications/json'}
//     });
//     if(response.ok){
//         document.location.replace('/');
//     } else {
//         alert('failed to log out');
//     }
// });
const logoutFunction = async () => {    
    try{
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log out.');
        }
    } catch (err){
        console.log(err);
    }
};


logout.addEventListener('click', logoutFunction);
