  $('#button').on('click', function(){
    var text = $('#addToList').val();
    $('.skills').append($('<li><button class="delete">X</button>' + text + '</li>'));
    $('.delete').click(function(e){
        $(this).parent('li').remove();
    })
});

function clearInput(){
    if($('#addToList').val() !== ""){
        $('#addToList') = "";
    }
}

//Questions: 

// 1.   How to remove the entry once the button is clicked
// 2.   How to not add a blank string to the list if user clicks button with empty input












