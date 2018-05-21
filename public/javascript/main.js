


function addNewItem(){  
    const item = $('.name-input').val();
    const photo  = $('.photo-input').val();
    $.post("http://localhost:3000/api/new", {name: item, photo: photo }).done(location.reload());
}


function wreckItem(){
    const $target = $(event.target);
    const id = $target.data('id');
  
   
    $.ajax({
        url:"http://localhost:3000/api/" + id,
        type: 'PUT',
        success: function(response) {
            alert('updated');
            location.reload()
        }
     });
}


$('.add-item').on('click', addNewItem);


$('body').on('click', '.smash-button', wreckItem );