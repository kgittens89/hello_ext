let pose = null;
let brandName = document.querySelector('.brand-name');

function fetchPoses() {
	let randomNumber = Math.floor(Math.random() * 87);

	// const url = `https://yoga-production-8fa1.up.railway.app/flowfactory/asana/random/${randomNumber}`;
	const url = `http://localhost:3000/flowfactory/asana/random/${randomNumber}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
            pose = data;
            console.log(pose)
		})
		.then(() => (brandName.innerHTML = pose.englishName))
		.catch((err) => console.log(err));
}

window.addEventListener('load', () => {
	fetchPoses();
});
