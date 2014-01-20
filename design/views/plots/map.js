function(doc) {
  if(doc.type === "price_vs_miles" && typeof(doc.collection_years) !== "undefined" &&
      doc.collection_years.length > 0){
    var col_yrs = doc.collection_years.slice(0)
    col_yrs.sort()
    var StartYear = "" + col_yrs[0]
    var EndYear = "" + col_yrs[col_yrs.length - 1]
    var MakeModelID = "" + doc.makeModelId
    var CarEngine = "" + doc.car_engine
    var CarYears = "" + doc.car_years
    var data = doc.point_data
    var key = [MakeModelID, CarYears, StartYear, EndYear, CarEngine]
    emit(key, doc.point_data)
  }
}
