{
  "_id":"_design/carplots",
  "_rev":"24-87685708fcb21365def8bd758ed589e4",
  "lists":{
    "key_value":"#"
  },
  "rewrites":[
    {
      "from":"/plots/:mmid/:yr",
      "query":{
        "endkey":[
          ":mmid",
          ":yr",
          {}
        ],
        "startkey":[
          ":mmid",
          ":yr"
        ]
      },
      "to":"/_list/key_value/plots"
    },
    {
      "from":"/plots/:mmid/:yr/:st/:end/:eng",
      "query":{
        "key":[
          ":mmid",
          ":yr",
          ":st",
          ":end",
          ":eng"
        ]
      },
      "to":"/_list/key_value/plots"
    }
  ],
  "views":{
    "plots":{
      "map":"#"
    }
  }
}