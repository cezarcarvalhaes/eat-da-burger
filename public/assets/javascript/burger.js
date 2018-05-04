$(document).ready(function (){

    //Add a new burger function
    $("#add-burger").on("click", function(event){
        event.preventDefault();
        var newBurger = $("#new-burger").val().trim();

        $.post("/api/burgers", {burger_name: newBurger}).then(
            function() {
                location.reload();
            }
        )
    });

    //Devour a burger!
    $(".devour-btn").on("click", function() {
        var id = $(this).data("id");
        var devouredState = {devoured: 1}

        $.ajax("api/burgers/"+ id, {
            type: "PUT",
            data: devouredState }).then(
            function(){
                location.reload();
            }
        )

    })


})