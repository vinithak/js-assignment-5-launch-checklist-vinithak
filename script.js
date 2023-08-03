// Write your JavaScript code here!
//const helperFunctions = require('./scriptHelper.js');
//import {addDestinationInfo,validateInput,formSubmission,pickPlanet, myFetch } from "./scriptHelper.js";

window.addEventListener("load", function() {


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    });

    const list = document.getElementById("faultyItems");
 
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");

    const button = document.getElementById("formSubmit");

    button.addEventListener("click", function(event){
        event.preventDefault();
        if(validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" ||  validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty"){
            alert("All Field are required");
        }
        else if(validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number"){
            alert("Pilot name and CoPilot name should be text");
        }
        else if(validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
            alert("Fuel Level and Cargo Level should be a number");
        }
        else{
            formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        }
    
    });

});