function(doc) {
  if(doc.type === "price_vs_miles" && typeof(doc.collection_years) !== "undefined" &&
      doc.collection_years.length > 0){
    var col_yrs = doc.collection_years.slice(0)
    col_yrs.sort()
    var startYear = "" + col_yrs[0]
    var endYear = "" + col_yrs[col_yrs.length - 1]
    var makeModelId = "" + doc.makeModelId
    var carEngine = "" + doc.car_engine
    var carYears = "" + doc.car_years
    var data = doc.point_data
    var key = [makeModelId, carYears, startYear, endYear, carEngine]
    emit(key, doc.point_data)
  }
}