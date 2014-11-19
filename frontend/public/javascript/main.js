
// Function to build the template of the <table> element. Each object is a different column.
function buildColumns(){

	var result = new Array();

	//ID Column
	result.push({
		header: "_ID",
		data: function(value){
			return value._id;
		}
	});

	//Date Column
	result.push({
		header: "Date",
		data: function(value){
			return value.time;
		}
	});

	//Source ID Column
	result.push({
		header: "Source ID",
		data: function(value){
			return value.source_address + " - " + value.source_id
		}
	})

	return result;
}


jQuery(document).ready(function ($) {

	//This represents the columns of the table
	var dataMap = buildColumns();

	//Ask for the Data
    $.ajax("/api")
        .done(function (data) {

        	//UI Feedback
            $("#spinner").hide("slow");

            //Build new HTML tags
            var tableHeader = $("<thead>");
            var tableBody = $("<tbody>");

            //Add tags to the <table>
			var tableContainer = $("#data-table");
            tableContainer.append(tableHeader);
            tableContainer.append(tableBody);

            //Insert the header row
            var tableHeaderRow = $("<tr>");
            tableHeader.append(tableHeaderRow);

            // Build the header cells
            $.each(dataMap, function(index, value){
            	var headerTag = $("<th>").append(value.header);
            	tableHeaderRow.append(headerTag);
            })

            //Insert the Data into the data cells
            $.each(data, function(index, value){

            	//Build new Row
            	var tableRow = $("<tr>");
            	tableBody.append(tableRow);

            	// Iterate through the possible columns
            	$.each(dataMap, function(index2, value2){

            		//Build a new cell and add the value to it
            		var tag = $("<td>").append(value2.data(value));
            		tableRow.append(tag);
            	});
            });
        });
    
});