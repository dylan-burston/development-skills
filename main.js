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