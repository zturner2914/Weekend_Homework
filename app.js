var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var claim6 = new claim("Zach Turner", "Emmergency", 2000)
var claim7 = new claim("Anna Buresh", "Primary Care", 1269) 
var claim8 =  new claim("Alex Yout", "Opitical", 5000)
var claim9 =  new claim("Megan Moot", "Specialist", 700)
var claim10 = new claim("Pat Swain", "Primary Care", 800)


var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10]

var totalPayedOut = 0;

// var newEl, newText, position;
// //Capture the position of insertion into the DOM
// position = document.getElementById('content');

// Loop the array, extracting each array and writing information to the DOM
// Note that the information is not 'clean'
// for(var i = 0; i < initialList.length; i++){
//   //added array[i] in the calculateSTI
// 	initialList[i] = claim(initialList[i]);
//  	newEl = document.createElement('li');
//   console.log(initialList[i]);

//   //adding .join will help serapte the array. You can put commas, ands, or pipes in the parameters.
// 	newText = document.createTextNode(initialList[i]);
// 	newEl.appendChild(newText);
// 	position.appendChild(newEl);
// }
//function to dete



function claim(name, type, cost){
	this.patientName =  name;
	this.visitType =  type;
	this.visitCost = cost;

}



//function to determine percent covered
function getPercentCovered(type){
	var medicalName = type.visitType
	switch(medicalName){
		case ("Optical"):
			coveragePercent = 0;
			break;
		case ("Specialist"):
			coveragePercent = .10;
			break;
		case ("Emergency"):
			coveragePercent = 1;
			break;
		case ("Primary Care"):
			coveragePercent = .5;
			break;
	}
	return coveragePercent;
}
var sumPaidOut = 0;
for(var i = 0; i < initialList.length; i++) {
	var paidOutCost = getPercentCovered(initialList[i]) * (initialList[i].visitCost);
	console.log("Paid out $" + paidOutCost + " for " + initialList[i].patientName);
	sumPaidOut +=  paidOutCost;
	console.log(Math.round(sumPaidOut));
	appendToTheDom("Paid out $" + paidOutCost + " for " + initialList[i].patientName);
}


function appendToTheDom (spy){
	var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

	newEl = document.createElement('li');
 
	newText = document.createTextNode(spy);
  //adding .join will help serapte the array. You can put commas, ands, or pipes in the parameters.newText = document.createTextNode(initialList[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);

}