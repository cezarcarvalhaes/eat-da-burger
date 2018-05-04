$(document).ready(function (){

    //Add a new burger function
    $("#add-burger").on("click", function(event){
        event.preventDefault();
        var newBurger = $("#new-burger").val().trim();
        console.log(newBurger)

        $.post("/api/burgers", {burger_name: newBurger}).then(
            function() {
                console.log('New burger: ' + newBurger);
                location.reload();
            }
        )
    });

    //Devour a burger!
    $(".devour-btn").on("click", function() {
        var id = $(this).data("id");
        console.log("Devouring! ....")
        var devouredState = {devoured: 1}

        $.ajax("api/burgers/"+ id, {
            type: "PUT",
            data: devouredState }).then(
            function(){
                console.log("devoured.")
                location.reload();
            }
        )

    })


})