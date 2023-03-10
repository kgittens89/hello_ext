let pose = null;
let anotherPoseBtn = document.querySelector('#another-pose-btn')

let tags = {
	englishNameTag: document.querySelector('.english-name-tag'),
	sanskritNameTag: document.querySelector('.sanskrit-name-tag'),
	difficultyTag: document.querySelector('.difficulty-tag'),
	imageTag: document.querySelector('.image-tag'),
	descriptionTag: document.querySelector('.description-tag'),
};

anotherPoseBtn.addEventListener('click', () => fetchPose())

function fetchPose() {
	let randomNumber = Math.floor(Math.random() * 87);

	// const url = `https://yoga-production-8fa1.up.railway.app/flowfactory/asana/random/${randomNumber}`;
	const url = `http://localhost:3000/flowfactory/asana/random/${randomNumber}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
            pose = data;
		})
		.then(() => updateDocument(pose, tags))
		.catch((err) => console.log(err));
}

function updateDocument(pose, tags) {
    tags.englishNameTag.innerText = pose.englishName
    tags.sanskritNameTag.innerText = pose.sanskritName
    tags.difficultyTag.innerText = pose.difficulty
    tags.imageTag.src = pose.image
    tags.descriptionTag.innerText = pose.description
}

window.addEventListener('load', () => {
	fetchPose();
});
