window.addEventListener('load', function(e) {
	console.log("Document loaded");
	getAllEvents();
	init();
});

function init() {
	document.eventForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		var eventId = document.eventForm.eventId.value;
		if (!isNaN(eventId) && eventId > 0) {
			getEvent(eventId);
		}
	});
	document.addEventForm.create.addEventListener('click', function(e) {
		e.preventDefault();
		addNewEvent();
	});
}

function clearEventDataDiv() {
//traverse adn select eventData div and clear it out
	let eventDataDiv = document.getElementById('eventData');
	while (eventDataDiv.firstElementChild) {
		eventDataDiv.removeChild(eventDataDiv.firstElementChild);
	}
}

function addNewEvent() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8090/api/games/', true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var eventObject = JSON.parse(xhr.responseText);
			displayEvent(eventObject);
			clearEventDataDiv();
			getAllEvents();
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('eventData');
			dataDiv.textContent = 'Error Adding Event';
		}
	};
	let form = document.addEventForm;
	var newEventObject = {
		name : form.name.value,
		description : form.description.value,
		developer : form.developer.value,
		platform : form.platform.value,
		releaseDate : form.releaseDate.value,
		completed : form.completed.value,
		hoursToComplete : form.hoursToComplete.value,
		imgUrl : form.imgUrl.value,
		genre : form.genre.value,
	};

	var newEventJsonString = JSON.stringify(newEventObject); // Convert JS object to JSON string
	xhr.send(newEventJsonString);

}

function getAllEvents() {
	// TODO
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
	while (dataDiv.firstElementChild) {
		dataDiv.removeChild(dataDiv.firstElementChild);
	}
	let table = document.createElement('table');

	// table heads
	let tableHead1 = document.createElement('th');
	// let tableHead2 = document.createElement('th');
	let tableHead3 = document.createElement('th');
	let tableHead4 = document.createElement('th');
	let tableHead5 = document.createElement('th');
	let tableHead6 = document.createElement('th');
	let tableHead7 = document.createElement('th');
	let tableHead8 = document.createElement('th');
	let tableHead9 = document.createElement('th');

	tableHead1.textContent = 'Name';
	// tableHead2.textContent = 'Description';
	tableHead3.textContent = 'Developer';
	tableHead4.textContent = 'Platform';
	tableHead5.textContent = 'Release Date';
	tableHead6.textContent = 'Completed';
	tableHead7.textContent = 'Hours To Complete';
	tableHead8.textContent = 'Image URL';
	tableHead9.textContent = 'Genre';

	table.appendChild(tableHead1);
	// table.appendChild(tableHead2);
	table.appendChild(tableHead3);
	table.appendChild(tableHead4);
	table.appendChild(tableHead5);
	table.appendChild(tableHead6);
	table.appendChild(tableHead7);
	table.appendChild(tableHead8);
	table.appendChild(tableHead9);

	for (let i = 0; i < eventList.length; i++) {

		// table data
		let tableRow = document.createElement('tr');
		table.appendChild(tableRow);

		let tableData1 = document.createElement('td');
		// let tableData2 = document.createElement('td');
		let tableData3 = document.createElement('td');
		let tableData4 = document.createElement('td');
		let tableData5 = document.createElement('td');
		let tableData6 = document.createElement('td');
		let tableData7 = document.createElement('td');
		let tableData8 = document.createElement('td');
		let tableData9 = document.createElement('td');
		tableData1.textContent = eventList[i].name;
		// tableData2.textContent = eventList[i].description;
		tableData3.textContent = eventList[i].developer;
		tableData4.textContent = eventList[i].platform;
		tableData5.textContent = eventList[i].releaseDate;
		tableData6.textContent = eventList[i].completed;
		tableData7.textContent = eventList[i].hoursToComplete;
		tableData8.textContent = eventList[i].imgUrl;
		tableData9.textContent = eventList[i].genre;
		tableRow.appendChild(tableData1);
		// tableRow.appendChild(tableData2);
		tableRow.appendChild(tableData3);
		tableRow.appendChild(tableData4);
		tableRow.appendChild(tableData5);
		tableRow.appendChild(tableData6);
		tableRow.appendChild(tableData7);
		tableRow.appendChild(tableData8);
		tableRow.appendChild(tableData9);
	}

	dataDiv.appendChild(table);
	document.body.appendChild(dataDiv);

	// for(let i = 0; i < eventList.length; i++){
	// let eventH2 = document.createElement('h2');
	// dataDiv.appendChild(eventH2);
	// eventH2.textContent = eventList[i].name;
	//		
	// let descriptionBq = document.createElement('blockquote');
	// dataDiv.appendChild(descriptionBq);
	// descriptionBq.textContent = eventList[i].description;
	//		
	// let miscUl = document.createElement('ul');
	// dataDiv.appendChild(miscUl);
	//		
	// let developerLi = document.createElement('li');
	// miscUl.appendChild(developerLi);
	// developerLi.textContent = 'Developer: ' + eventList[i].developer;
	//		
	// let platformLi = document.createElement('li');
	// miscUl.appendChild(platformLi);
	// platformLi.textContent = 'Platform: ' + eventList[i].platform;
	//		
	// let releaseDateLi = document.createElement('li');
	// miscUl.appendChild(releaseDateLi);
	// releaseDateLi.textContent = 'Release Date: ' + eventList[i].releaseDate;
	//		
	// let completedLi = document.createElement('li');
	// miscUl.appendChild(completedLi);
	// if(eventList[i].completed){
	// completedLi.textContent = 'Completed: Yes';
	// }
	// else{
	// completedLi.textContent = 'Completed: No';
	//
	// }
	//		
	// let hoursToCompleteLi = document.createElement('li');
	// miscUl.appendChild(hoursToCompleteLi);
	// hoursToCompleteLi.textContent = 'Hours To Complete: ' +
	// eventList[i].hoursToComplete;
	//		
	// let imgUrlLi = document.createElement('li');
	// miscUl.appendChild(imgUrlLi);
	// imgUrlLi.textContent = 'IMG URL: ' + eventList[i].imgUrl;
	//		
	// let genreLi = document.createElement('li');
	// miscUl.appendChild(genreLi);
	// genreLi.textContent = 'Genre: ' + eventList[i].genre;
	//		
	// }

	console.log(eventList);
}

function getEvent(eventId) {
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	// with the filmId appended.
	// * On success, if a response was received parse the film data
	// and pass the film object to displayFilm().
	// * On failure, or if no response text was received, put "Film not found"
	// in the filmData div.
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8090/api/games/' + eventId, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var eventObject = JSON.parse(xhr.responseText);
			displayEvent(eventObject);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('eventData');
			dataDiv.textContent = 'Event Not Found';
		}
	};
	xhr.send(null);
}

function displayEvent(event) {
	var dataDiv = document.getElementById('eventData');
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	// * Rating, release year, and length as an unordered list.
	dataDiv.textContent = '';
	while (dataDiv.firstElementChild) {
		dataDiv.removeChild(dataDiv.firstElementChild);
	}

	let eventH2 = document.createElement('h2');
	dataDiv.appendChild(eventH2);
	eventH2.textContent = event.name;

	let descriptionBq = document.createElement('blockquote');
	dataDiv.appendChild(descriptionBq);
	descriptionBq.textContent = event.description;

	let miscUl = document.createElement('ul');
	dataDiv.appendChild(miscUl);

	let developerLi = document.createElement('li');
	miscUl.appendChild(developerLi);
	developerLi.textContent = 'Developer: ' + event.developer;

	let platformLi = document.createElement('li');
	miscUl.appendChild(platformLi);
	platformLi.textContent = 'Platform: ' + event.platform;

	let releaseDateLi = document.createElement('li');
	miscUl.appendChild(releaseDateLi);
	releaseDateLi.textContent = 'Release Date: ' + event.releaseDate;

	let completedLi = document.createElement('li');
	miscUl.appendChild(completedLi);
	if (event.completed) {
		completedLi.textContent = 'Completed: Yes';
	} else {
		completedLi.textContent = 'Completed: No';

	}

	let hoursToCompleteLi = document.createElement('li');
	miscUl.appendChild(hoursToCompleteLi);
	hoursToCompleteLi.textContent = 'Hours To Complete: '
			+ event.hoursToComplete;

	let imgUrlLi = document.createElement('li');
	miscUl.appendChild(imgUrlLi);
	imgUrlLi.textContent = 'IMG URL: ' + event.imgUrl;

	let genreLi = document.createElement('li');
	miscUl.appendChild(genreLi);
	genreLi.textContent = 'Genre: ' + event.genre;

}