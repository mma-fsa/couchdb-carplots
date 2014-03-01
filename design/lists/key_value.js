function(head, req) {
  provides("json", function(){
    var list = []
    var row = null
    while(row = getRow()){
      var rowKey = {
          MakeModelID: row.key[0],
          CarYear: row.key[1],
          CarEngineID: row.key[2]
      }
      list.push({
        "key": rowKey,
        "value": row.value
      })     
    }
    return toJSON(list)
  })  
}
