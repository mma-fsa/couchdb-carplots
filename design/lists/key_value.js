function(head, req) {
  provides("json", function(){
    var list = []
    var row = null
    while(row = getRow()){
      var rowKey = {
          makeModelId: row.key[0],
          carYear: row.key[1],
          startYear: row.key[2],
          endYear: row.key[3],
          carEngine: row.key[4]
      }
      list.push({
        "key": rowKey,
        "value": row.value
      })     
    }
    return toJSON(list)
  })  
}