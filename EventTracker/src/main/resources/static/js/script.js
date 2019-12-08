window.addEventListener('load', function(e){
	console.log("Document loaded");
	getAllEvents();
	init();
});

function init(){
	//TODO 
}

function getAllEvents(){
	//TODO 
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8090/api/games/', true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var eventListObject = JSON.parse(xhr.responseText);
			displayAllEvents(eventListObject);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('eventData');
			dataDiv.textContent = 'Events Not Found';
		}
	};
	xhr.send(null);
}

function displayAllEvents(eventList) {
	var dataDiv = document.getElementById('eventData');
	// TODO:
	// * Create and append elements to the data div to display:
	dataDiv.textContent = '';
//	while (dataDiv.firstElementChild) {
//		dataDiv.removeChild(dataDiv.firstElementChild);
//	}
	
	
	for(let i = 0; i < eventList.length; i++){
		let eventH2 = document.createElement('h2');
		dataDiv.appendChild(eventH2);
		eventH2.textContent = eventList[i].name;
		
		let descriptionBq = document.createElement('blockquote');
		dataDiv.appendChild(descriptionBq);
		descriptionBq.textContent = eventList[i].description;
		
		let miscUl = document.createElement('ul');
		dataDiv.appendChild(miscUl);
		
		let developerLi = document.createElement('li');
		miscUl.appendChild(developerLi);
		developerLi.textContent = 'Developer: ' + eventList[i].developer;
		
		let platformLi = document.createElement('li');
		miscUl.appendChild(platformLi);
		platformLi.textContent = 'Platform: ' + eventList[i].platform;
		
		let releaseDateLi = document.createElement('li');
		miscUl.appendChild(releaseDateLi);
		releaseDateLi.textContent = 'Release Date: ' + eventList[i].releaseDate;
		
		let completedLi = document.createElement('li');
		miscUl.appendChild(completedLi);
		if(eventList[i].completed){
			completedLi.textContent = 'Completed: Yes';
		}
		else{
			completedLi.textContent = 'Completed: No';

		}
		
		let hoursToCompleteLi = document.createElement('li');
		miscUl.appendChild(hoursToCompleteLi);
		hoursToCompleteLi.textContent = 'Hours To Complete: ' + eventList[i].hoursToComplete;
		
		let imgUrlLi = document.createElement('li');
		miscUl.appendChild(imgUrlLi);
		imgUrlLi.textContent = 'IMG URL: ' + eventList[i].imgUrl;
		
		let genreLi = document.createElement('li');
		miscUl.appendChild(genreLi);
		genreLi.textContent = 'Genre: ' + eventList[i].genre;
		
		
	}
	

	console.log(eventList);
}