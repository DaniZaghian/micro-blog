console.log("Sanity Check: JS is working!");

$(document).ready(function () {

	// find starting number of posts, append to count div
	var countPosts = 0;

	//grab the value from the input box
    $('form').on('submit', function(e) {
    	e.preventDefault();
        var toPost = $('#inputPost').val();
        //on submit, append posted item to UL
        $('ul').append('<li>' + toPost + '</li>');
        //clear text in form once submitted
        $('#inputPost').val('');
        //increase post count and append to count div
		countPosts = countPosts + 1;
		$("#counter").text(" ").append(countPosts + " posts");
    });
    //when you click the element, remove from list
    $(document).on('click', 'li', function () {
        $(this).remove();
    });

   

    

});