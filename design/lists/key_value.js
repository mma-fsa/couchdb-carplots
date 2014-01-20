function(head, req) {
  provides("json", function(){
    var list = []
    var row = null
    while(row = getRow()){
      var rowKey = {
          MakeModelID: row.key[0],
          CarYear: row.key[1],
          StartYear: row.key[2],
          EndYear: row.key[3],
          CarEngineID: row.key[4]
      }
      list.push({
        "key": rowKey,
        "value": row.value
      })     
    }
    return toJSON(list)
  })  
}
