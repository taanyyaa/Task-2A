const canvas = document.querySelector('.webgl')
// creating a scene
const scene = new THREE.Scene()

const audio = new Audio("freejAudio.mp3");
audio.play();





const panorama = new PANOLENS.ImagePanorama('Forestpan-2.jpeg');
const containerBody = document.querySelector(".containerImage")
containerBody.style.width = innerWidth
containerBody.style.height = innerHeight
console.log(containerBody)
const viewer = new PANOLENS.Viewer({
    container: containerBody
});
viewer.add(panorama);

