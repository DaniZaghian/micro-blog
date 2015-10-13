console.log("Sanity Check: JS is working!");

$(document).ready(function () {

	//grab the value from the input box
    $('form').on('submit', function(e) {
    	e.preventDefault();
        var toPost = $('#postItem').val();
        //on submit, append posted item to page in UL
        $('ul').append('<li>' + toPost + '</li>');
        //clear text in text bos
        $('form').children('#postItem').val('');
    });
    //when you click the item, remove from list
    $(document).on('click', 'li', function () {
        $(this).remove();
    });
});