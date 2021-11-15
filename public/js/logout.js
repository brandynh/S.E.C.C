const logout = document.getElementById('logout');

logout.addEventListener('click', (e)=>{
    e.preventDefault();
    return new Promise((resolve, reject) =>{
        let endpoint = '/api/users/logout';
        fetch(endpoint, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
            .then(e =>{
                if(e.ok){
                    resolve(e);
                    document.location.replace('/');
                } else {
                    reject(e);
                }
            }).catch(err =>{
                console.log(err);
            })

    })
});



