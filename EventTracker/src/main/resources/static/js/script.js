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
	let table = document.createElement('table');

	for (let i = 0; i < eventList.length; i++) {
		  let tableRow = document.createElement('tr');
		  table.appendChild(tableRow);
		  let tableData1 = document.createElement('td');
		  let tableData2 = document.createElement('td');
		  let tableData3 = document.createElement('td');
		  let tableData4 = document.createElement('td');
		  let tableData5 = document.createElement('td');
		  let tableData6 = document.createElement('td');
		  let tableData7 = document.createElement('td');
		  let tableData8 = document.createElement('td');
		  let tableData9 = document.createElement('td');
		  tableData1.textContent = eventList[i].name;
		  tableData2.textContent = eventList[i].description;
		  tableData3.textContent = eventList[i].developer;
		  tableData4.textContent = eventList[i].platform;
		  tableData5.textContent = eventList[i].releaseDate;
		  tableData6.textContent = eventList[i].completed;
		  tableData7.textContent = eventList[i].hoursToComplete;
		  tableData8.textContent = eventList[i].imgUrl;
		  tableData9.textContent = eventList[i].genre;
		  tableRow.appendChild(tableData1);
		  tableRow.appendChild(tableData2);
		  tableRow.appendChild(tableData3);
		  tableRow.appendChild(tableData4);
		  tableRow.appendChild(tableData5);
		  tableRow.appendChild(tableData6);
		  tableRow.appendChild(tableData7);
		  tableRow.appendChild(tableData8);
		  tableRow.appendChild(tableData9);
		}

		document.body.appendChild(table);
	
//	for(let i = 0; i < eventList.length; i++){
//		let eventH2 = document.createElement('h2');
//		dataDiv.appendChild(eventH2);
//		eventH2.textContent = eventList[i].name;
//		
//		let descriptionBq = document.createElement('blockquote');
//		dataDiv.appendChild(descriptionBq);
//		descriptionBq.textContent = eventList[i].description;
//		
//		let miscUl = document.createElement('ul');
//		dataDiv.appendChild(miscUl);
//		
//		let developerLi = document.createElement('li');
//		miscUl.appendChild(developerLi);
//		developerLi.textContent = 'Developer: ' + eventList[i].developer;
//		
//		let platformLi = document.createElement('li');
//		miscUl.appendChild(platformLi);
//		platformLi.textContent = 'Platform: ' + eventList[i].platform;
//		
//		let releaseDateLi = document.createElement('li');
//		miscUl.appendChild(releaseDateLi);
//		releaseDateLi.textContent = 'Release Date: ' + eventList[i].releaseDate;
//		
//		let completedLi = document.createElement('li');
//		miscUl.appendChild(completedLi);
//		if(eventList[i].completed){
//			completedLi.textContent = 'Completed: Yes';
//		}
//		else{
//			completedLi.textContent = 'Completed: No';
//
//		}
//		
//		let hoursToCompleteLi = document.createElement('li');
//		miscUl.appendChild(hoursToCompleteLi);
//		hoursToCompleteLi.textContent = 'Hours To Complete: ' + eventList[i].hoursToComplete;
//		
//		let imgUrlLi = document.createElement('li');
//		miscUl.appendChild(imgUrlLi);
//		imgUrlLi.textContent = 'IMG URL: ' + eventList[i].imgUrl;
//		
//		let genreLi = document.createElement('li');
//		miscUl.appendChild(genreLi);
//		genreLi.textContent = 'Genre: ' + eventList[i].genre;
//		
//	}
	

	console.log(eventList);
}