var dateFormat = "YYYY-MM-DD HH:MM:SS"

jQuery(document).ready(function ($){

    var dataProvider = new Array();

	//Parse the data Object
    $.each(data, function(index, value){

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