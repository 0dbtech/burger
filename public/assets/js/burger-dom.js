// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  
  $(".devour").on("click", "#devour-me", function(event) {
    // $("#devour-me").on("click", function(event) {

     

      var id = $(this).data("id");
      // var newEat = $(this).data("devoured");
  
      var newEatState = {
        id: id,
        devoured: true
      };
      
      console.log("clicking " + newEatState.id + " devoured " + newEatState.devoured)
   
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eaten status to " + newEatState.devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    //Add new burger
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
  
      var newBurger = {
        burger_name: $("#burger-text").val().trim()
        // devoured: $("[name=devoured]:checked").val().trim()
      };
      // console.log('here ', newBurger)
     
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger " + newBurger.burger_name);
          // Reload the page to get the updated list
          location.reload();
        }
      );

      console.log("burger_name is " + newBurger.burger_name);
    });
  


    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  