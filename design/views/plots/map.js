function(doc) {
  if(doc.type === "price_vs_miles")
	{
		var StartYear = "";
		var EndYear = "";
		if (typeof(doc.collection_years) === "object") {
			var col_yrs = doc.collection_years.slice(0)
			col_yrs.sort();		
			StartYear += col_yrs[0]
			EndYear += col_yrs[col_yrs.length - 1]
		} else {
			StartYear += doc.collection_years;
			EndYear += doc.collection_years;
		}
    var MakeModelID = "" + doc.makeModelId
    var CarEngine = "" + doc.car_engine
    var CarYears = "" + doc.car_years
    var key = [MakeModelID, CarYears, CarEngine]

		var xPoints = [];
		var yPoints = [];

		for (var i=0; i<doc.point_data.x.length; i++) {
			var x_pt = Number(doc.point_data.x[i]);
			var y_pt = Number(doc.point_data.y[i]);
			if (x_pt >= 0 && y_pt >= 0) {
				xPoints.push(x_pt);
				yPoints.push(y_pt);
			}
		}
		emit(key, {
			"x": xPoints,
			"y": yPoints,
			"startYear": StartYear,
			"endYear": EndYear
		});
  }
}
