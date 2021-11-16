//Handle form that creates project
const projectForm = document.getElementById('createProjectForm');

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const code = document.getElementById('code').value;
    const date_created = Date.now();

    const jsonMessage = {
        name: name,
        description: description,
        date_created: date_created,
        projectCode: code
    }

    fetch('api/projects/create-project', {
        method: 'POST',
        JSON: true,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonMessage)
    }).then((response) =>{
        if(response.ok){
            document.location.replace('/dashboard')//Go to dasboard
        } else {
            alert('Failed to create project')
        }
    }).catch((err) =>{
        console.log(err);
    });

});

