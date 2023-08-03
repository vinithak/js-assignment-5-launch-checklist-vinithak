// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    console.log(missionTarget);
    console.log(missionTarget.innerhtml);
    missionTarget.style.color = "green";
    // missionTarget.innerhtml = 
    //            `<h2>Mission Destination</h2>
    //             <ol>
    //                 <li>Name: ${name}</li>
    //                 <li>Diameter: ${diameter}</li>
    //                 <li>Star: ${star}</li>
    //                 <li>Distance from Earth: ${distance}</li>
    //                 <li>Number of Moons: ${moons}</li>
    //             </ol>
    //             <img src=${imageUrl}>`;
   
}

function validateInput(testInput) {
    if(!testInput){
        return "Empty";
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


        
        const launchStatus = document.querySelector("launchStatus"); //document.getElementById("launchStatus");
        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        pilotStatus.innerhtml = 'Pilot ${pilot} Ready';
        copilotStatus.innerhtml = 'Co-pilot ${copilot} Ready';

        if(fuelLevel < 10000){
            list.visible = true;
            fuelStatus.innerhtml = "Fuel Level Low - There is not enough fuel for the journey";
            launchStatus.innerhtml = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        else if(cargoLevel > 10000){
            list.visible = true;
            cargoStatus.innerhtml = "There is too much mass for the shuttle to take off";
            launchStatus.innerhtml = "Shuttle not ready for launch";
            launchStatus.style.color = rgb(199, 37, 78);
        }
        else{
            list.visible = false;
            launchStatus.innerhtml = "Shuttle is ready for launch";
            launchStatus.style.color = rgb(65, 159, 106);           
        }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json() });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor((Math.random() * planets.length));
    return planets[index];
}


module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
module.exports.addDestinationInfo = addDestinationInfo;
