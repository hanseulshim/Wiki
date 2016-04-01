$(document).ready(function(){
	

	var content = $('.content');
	var search = $('#search');
	var formSearch = $('#formSearch');


    formSearch.submit(function(e) {
    e.preventDefault();
});
    search.keypress(function (e){
    	var value="";
    	if(e.which==13){
    		value=search.val();
    		searchWiki(value);
    	}


    });

    function searchWiki(value){

    	    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&list=&generator=search&formatversion=2&exsentences=1&exlimit=10&exintro=1&explaintext=1&inprop=url&gsrsearch="+value+"&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
        	content.empty();
        	console.log(typeof data.query);
        	if(typeof data.query != "undefined"){
        	var page=data.query.pages
        	for (var search in page)
        	{

        	content.append("<a target='_blank' href='"+page[search].fullurl+"' class='article'><li><h3 class='title'>"+page[search].title+"</h3>"+"<p class='text'>"+page[search].extract+"</p></li></a>");
        	$('.article').each(function(index){
        		$(this).delay(50*index).fadeIn(800);
        		});
        	}
        }
        	else{

        		title.html("NOT FOUND IN WIKIPEDIA");
        		content.html("");
        	}
        
            


        },

   		 });
    }

});