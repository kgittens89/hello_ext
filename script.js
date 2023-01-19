let pose = [];

const randomButton = document.getElementById("randomize-btn")

function fetchPoses() {
    let randomNumber = Math.floor(Math.random() * 87);

    const url = `https://yoga-production-8fa1.up.railway.app/flowfactory/asana/random/${randomNumber}`;
    
    fetch(url)
    .then(res => res.json())
        .then(data => {
            console.log(data)
            pose = data
        })
        .then(res => window.location.replace('/showPose.html'))
    .catch(err => console.log(err))  
}

randomButton.addEventListener('click', () => {
    fetchPoses()
})