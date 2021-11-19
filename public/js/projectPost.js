const createPostBtn = document.getElementById('createPostBtn');
const submitPostBtn = document.getElementById('submitPostBtn')
const projectPostForm = document.getElementById('projectPostForm');
const url = window.location.href;
const editBtn = document.querySelectorAll('.editBtn');
const deleteBtn = document.querySelectorAll('.deleteBtn');


deleteBtn.forEach((btn) =>{
    btn.addEventListener('click', (e)=>{
        console.log('here')
        e.preventDefault();
        let postId = btn.parentElement.children[0].innerText;
        const fetchDelete = () => {
            fetch(`/api/projects/projectPost/${postId}`, {
                method: 'DELETE',
            }).then((response) => {
                if(response.ok){
                    document.location.reload();
                } else {
                    alert('Delete failed');
                }
            }).catch((err) =>{
                console.log(err);
            })
        }

        fetchDelete();
    })
});


// console.log(editBtn);
editBtn.forEach((btn)=>{
    // console.log(btn.parentElement.children[0].innerText)
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        let updateForm = btn.parentElement.parentElement.parentElement.children[1];
        let postId = btn.parentElement.children[0].innerText;

        if(btn.innerText === 'Edit Post'){   
            btn.innerText = 'Cancel';
            updateForm.style.display = 'block';
        } else {
            btn.innerText = 'Edit Post';
            updateForm.style.display = 'none';
        }
        let submitUpdate = updateForm.children[0].children[4];

        

        fetchUpdate = async (e) => {
            // console.log(postId)
            const newTitle = updateForm.children[0].children[1].value;
            const newComment = updateForm.children[0].children[3].value;
            e.preventDefault();
            fetch(`/api/projects/projectPost/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newTitle, newComment, postId, projectId})
            }).then((response) => {
                if(response.ok){
                    document.location.reload();
                } else {
                    alert('update failed');
                }
            }).catch((err) =>{
                console.log(err);
            })
        }
        submitUpdate.addEventListener('click', fetchUpdate);      
    });
})

let projectId;
if(url.includes('?')){
    projectId = window.location.href.substring(window.location.href.length - 2, window.location.href.length - 1)
} else {
    projectId = window.location.href.substring(window.location.href.length - 1);
}


// const projectId =  window.location.href.substring(window.location.href.length - 1);

createPostBtn.addEventListener('click', ()=>{
    if(createPostBtn.innerText === 'Create'){
        projectPostForm.style.display = 'inline';
        createPostBtn.innerText = 'Cancel';
    } else {
        projectPostForm.style.display = 'none';
        createPostBtn.innerText = 'Create';
    }
})

const submitPost = (e) =>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;

    fetch('/api/projects/postProject', {
        method: 'POST',
        JSON: true,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, comment, projectId})
    }).then((response) =>{
        if(response.ok){
            document.location.reload();
        } else {
            alert('Post Failed')
        }
    }).catch((err) =>{
        console.log(err);
    });
}

submitPostBtn.addEventListener('click', submitPost);

