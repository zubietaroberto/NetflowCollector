jQuery(document).ready(function ($) {

    var chart = AmCharts.makeChart("chartdiv", {
        "type": "pie",
        "theme": "none",
        "dataProvider": data,
        "valueField": "count",
        "titleField": "_id",
        "exportConfig": {
            menuItems: [{
                    icon: '/lib/3/images/export.png',
                    format: 'png'
                }]
        }
    });
});