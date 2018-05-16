// References to tbody and button
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#search");

// References to inputs
var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Add event lister to button, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredSightings to dataSet
var filteredSightings = dataSet;

// Create function renderTable to render filteredSightings to tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredSightings.length; i++) {
        // Get current sightings object and fields
        var sightings = filteredSightings[i];
        var fields = Object.keys(sightings);
        
        // Create new row in tbody, set index to i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length -2; j++) {
          // For every field in sightings object, create new cell
          // Set its inner text to be current value at current sightings field
          var field = fields[j];
          var $cell = $row.insertCell(j);
          $cell.innerText = sightings[field];
            
        }
    }
};
console.log("Table rendered");

function handleSearchButtonClick() {
    // Format input by removing whitespace and convert string to lowercase
    var filterDatetime = $datetimeInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

    // Set filteredSightings to array of all rows that match the filter
    filteredSightings = dataSet.filter(function(sightings) {
        var dataDatetime = sightings.datetime;
        var dataCity = sightings.city.toLowerCase();
        var dataState = sightings.state.toLowerCase();
        var dataCountry = sightings.country.toLowerCase();
        var dataShape = sightings.shape.toLowerCase();

        // If true, add row to filteredSightings, otherwise don't add to filteredSightings
        if ((dataDatetime === filterDatetime || filterDatetime === "") &&
            (dataCity === filterCity || filterCity === "") &&
            (dataState === filterState || filterState === "") &&
            (dataCountry === filterCountry || filterCountry === "") &&
            (dataShape === filterShape || filterShape === "")) {
                return true;
            }
        return false;
    });
    renderTable();
};

// Render table for the first time on page load
renderTable();
