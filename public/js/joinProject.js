const joinProjectFrom = document.getElementById('addCodeForm');
const joinProjectBtn = document.getElementById('addCode');

joinProjectBtn.addEventListener('click', () =>{
    const projectInputCode = document.getElementById('projectCodeInput').value;

    fetch('api/projects/addMember', {
        method: 'POST',
        JSON: true,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({projectInputCode})
    }).then((response) =>{
        if(response.ok){
            document.location.replace('dashboard')//Go to dasboard
        } else {
            alert('Failed to join project')
        }
    }).catch((err) =>{
        console.log(err);
    });
});