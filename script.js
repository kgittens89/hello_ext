let poses = [];
let randomPose;

async function fetchPoses() {
    const url = `https://yoga-production-8fa1.up.railway.app/flowfactory/asana`;

    try {
        const res = await fetch(url);
        const resJson = await res.json();
        poses = resJson
        randomPose = poses[3]
        console.log(poses)
        console.log(randomPose)
    } catch (error) {
        console.log(error)
    }
}

fetchPoses()