// from data.js
var tableData = data;

// YOUR CODE HERE!

console.log(tableData);

var tbody = d3.select("tbody");

var table = d3.select("table");

table.attr("class", "table table-striped");

// var tbody = d3.select("tbody");

// var row = tbody.append("tr");

tableData.forEach(item => {

    // creates a "tr" for each object in array
    var row = tbody.append("tr");

    Object.entries(item).forEach(([key, value]) => {
        row.append("td").text(value);



    })

})
    
// Button Filter

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    // Print input value by user
    console.log(inputValue);

    var filteredtable = tableData.filter(obj => obj.datetime == inputValue);
    
    // print filtered table 
    console.log(filteredtable);

    // clear table
    tbody.html("");

    //Add filtered data to the table
    
    filteredtable.forEach(item => {

        // creates a "tr" for each object in array
        var row = tbody.append("tr");
    
        Object.entries(item).forEach(([key, value]) => {
            row.append("td").text(value);
      
        })

    })



});
