//Globals
const draggableObjects = document.querySelectorAll('.draggables')
const dropContainer = document.querySelectorAll('.dropBox')

//Event Listeners
document.addEventListener('DOMContentLoaded', (resp) => {
    console.log('Dom is Loaded');
})

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

dropContainer.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.movingObj')
        container.appendChild(draggable);
    })
})


//Grabbing Top Hit Data from API and Rendering on Page
async function getTopHits() {
    const response = await fetch("https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2022-03-18", {
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "f7e6bb3797mshd2ace5b23f0447dp16e2e8jsne644dd13656d"
	}
}); const data = await response.json();
    console.log(data)
    const num = randomizeHits();
    const title = (data.content[num].title)
    const artist = (data.content[num].artist)
    const singleTag = {title, artist}
    document.getElementsByClassName('draggables').innerHTML = singleTag;
    console.log(document.getElementsByClassName('draggables').innerHTML)
}
   
    getTopHits();

// .catch(err => {
// 	console.error(err);
// })};

//Randomizing Order of Hits
function randomizeHits() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

//Inject JSON data into HTML
