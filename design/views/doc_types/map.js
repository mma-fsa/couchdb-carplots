function(doc) {
	if (typeof(doc.doc_type) !== 'undefined') {
	  emit(doc.doc_type, null)
	}	
}