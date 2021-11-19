const createPostBtn = document.getElementById('createPostBtn');
const projectPostForm = document.getElementById('projectPostForm');
const url = window.location.href;
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

    // fetchData.then((response) =>{
    //     if(response.ok){
    //         document.location.replace('/');
    //     } else {
    //         alert('Post Failed')
    //     }
    // }).catch((err) =>{
    //     console.log(err);
    // })
}

projectPostForm.addEventListener('submit', submitPost);

