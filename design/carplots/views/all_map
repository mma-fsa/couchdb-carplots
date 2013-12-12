function(doc) { 
	if (typeof(doc.makeModelId) != 'undefined' &&
			typeof(doc.collection_years) != 'undefined' &&
			typeof(doc.type) != 'undefined' &&
			doc.type == 'price_vs_miles' &&
			doc.collection_years.length == 3) {  
					emit(doc.makeModelId, doc); 
	}
}
