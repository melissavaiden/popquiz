//Globals
const draggableObjects = document.querySelectorAll('.draggables')
const dropContainer = document.querySelectorAll('.dropContainer')

//Event Listeners
document.addEventListener('DOMContentLoaded', (resp) => {
    console.log('Dom is Loaded');
    getTopHits();
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


//Grabbing Top Hit Data from API
function getTopHits() {
fetch("https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2022-03-18", {
	"headers": {
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com",
		"x-rapidapi-key": "f7e6bb3797mshd2ace5b23f0447dp16e2e8jsne644dd13656d"
	}
})
.then(response => response.json())
.then(data => data.content[randomizeHits()])
.catch(err => {
	console.error(err);
})};

//Randomizing Order of Hits
function randomizeHits() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

//Creating Draggables
    function draggables() {
        return `
        <p class="draggables" draggable="true">"${getTopHits()}"</p>
        `
}
