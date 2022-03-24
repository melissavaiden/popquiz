//Event Listeners
document.addEventListener('DOMContentLoaded', (response) => {
    console.log('Dom is Loaded')
    getTopHits();
    addDrag();
})

//Grabbing Top Hit Data from API and Rendering on Page
async function getTopHits() {
    const response = await fetch("https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2022-03-18", {
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "f7e6bb3797mshd2ace5b23f0447dp16e2e8jsne644dd13656d"
	}
}) 
    const data = await response.json();
    const songs = Object.values(data.content)
    songs.forEach(element => {
        let song = "Title:" + element.title + "<br>" + "Arist:" + element.artist;
        const selectionsContainer = document.getElementById('selectionsContainer')
        const p = document.createElement('p')
        p.draggable = "true"
        p.classList.add('draggables')
        p.innerHTML = song;
        const singleTag = selectionsContainer.appendChild(p)
    })

}


//Drag and Drop Functions
function addDrag() {
    const draggableObjects = document.querySelectorAll('.draggables')
    draggableObjects.forEach(draggables => {
        draggables.addEventListener('dragstart', () => {
            draggables.classList.add('movingObj')
    })
})
    draggableObjects.forEach(draggables => {
        draggables.addEventListener('dragend', () => {
            draggables.classList.remove('movingObj');
    })
})
}
    

function dragAndDrop() {
    const dropContainer = document.querySelectorAll('.dropBox')
    dropContainer.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggable = document.querySelector('.draggables')
            container.appendChild(draggable);
    })
})
}
// .catch(err => {
// 	console.error(err);
// })};
function randomizeSongs() {

}