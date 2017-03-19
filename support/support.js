function fillInCheck(form){
	if((form.name.value.length < 1) | (form.rating.value < 1)){
		alert("You have not entered a name or forgot to rate the site.");
		return false;
	}else{
		alert("Dear " + form.name.value + ",\nThank you very much for your feedback.\nWe are glad that you have rated your experience with the site as " + form.rating.value +"  and your comment was: "+ form.comment.value);
		return true;
	}
}
