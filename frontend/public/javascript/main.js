var dateFormat = "YYYY-MM-DD HH:MM:SS"

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
			return AmCharts.formatDate(new Date(value.measured_time), dateFormat);
		}
	});

	//Source ID Column
	result.push({
		header: "Source ID",
		data: function(value){
			return value.source_address + " - " + value.source_id
		}
	});

	//Total Bytes Column
	result.push({
		header: "Bytes",
		data: function(value){
			return value["IN_BYTES"]
		}
	});

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

            var dataProvider = new Array();

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

            	//Add to the Dataprovider
            	dataProvider.push({
            		date: new Date(value.measured_time),
            		value: value["IN_BYTES"]
            	});

			});

			//Activate Amcharts
			 AmCharts.makeChart("chartdiv", {
			    "type": "serial",
			    "theme": "none",
			    "pathToImages": "http://www.amcharts.com/lib/3/images/",
			    "dataProvider": dataProvider,
		        "graphs": [{
					"id": "g1",
		            "bullet": "round",
		            "bulletBorderAlpha": 1,
		            "bulletColor": "#FFFFFF",
		            "bulletSize": 5,
		            "hideBulletsCount": 50,
		            "lineThickness": 2,
		            "title": "red line",
		            "useLineColorForBulletBorder": true,
		            "valueField": "value",
        			"type": "smoothedLine"
		        }],
		        "chartScrollbar": {
					"graph": "g1",
					"scrollbarHeight": 30
				},
			    "chartScrollbar": {},
			    "chartCursor": {
			        "categoryBalloonDateFormat": dateFormat,
			        "cursorAlpha": 0,
			        "cursorPosition": "mouse"
			    },
			    "dataDateFormat": dateFormat,
			    "categoryField": "date",
			    "categoryAxis": {
			    	"minPeriod": "fff",
			    	"parseDates": true,
			        "minorGridAlpha": 0.1,
			        "minorGridEnabled": true
			    }

			});
        });
    
});