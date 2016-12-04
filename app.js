$(document).ready(function() {

    $.ajax({
        type: "GET",
        // where you are making the GET request to
        url: "https://myapi.profstream.com/api/85ef9b/wines",

        // callback functions
        success: function(wine) {
            console.log(wine);
            console.log(wine[0].name + " " + wine[0].year + " (" + wine[0].grapes + ") " + "of " + wine[0].region + ", " + wine[0].country + ": " + wine[0].description + " Price: $" + wine[0].price + "; " + "ID: #" + wine[0].id + ". " + "(Additional info: Created at: " + wine[0].created_at + "; " + "Updated at: " + wine[0].updated_at + "; " + "Image: " + wine[0].picture + "; " + "Instance ID: #" + wine[0].instance_id + ")." );
            console.log(wine[1].name + " " + wine[1].year + " (" + wine[1].grapes + ") " + "of " + wine[1].region + ", " + wine[1].country + ": " + wine[1].description + " Price: $" + wine[1].price + "; " + "ID: #" + wine[1].id + ". " + "(Additional info: Created at: " + wine[1].created_at + "; " + "Updated at: " + wine[1].updated_at + "; " + "Image: " + wine[1].picture + "; " + "Instance ID: #" + wine[1].instance_id + ")." );
            console.log(wine[2].name + " " + wine[2].year + " (" + wine[2].grapes + ") " + "of " + wine[2].region + ", " + wine[2].country + ": " + wine[2].description + " Price: $" + wine[2].price + "; " + "ID: #" + wine[2].id + ". " + "(Additional info: Created at: " + wine[2].created_at + "; " + "Updated at: " + wine[2].updated_at + "; " + "Image: " + wine[2].picture + "; " + "Instance ID: #" + wine[2].instance_id + ")." );
            console.log(wine[3].name + " " + wine[3].year + " (" + wine[3].grapes + ") " + "of " + wine[3].region + ", " + wine[3].country + ": " + wine[3].description + " Price: $" + wine[3].price + "; " + "ID: #" + wine[3].id + ". " + "(Additional info: Created at: " + wine[3].created_at + "; " + "Updated at: " + wine[3].updated_at + "; " + "Image: " + wine[3].picture + "; " + "Instance ID: #" + wine[3].instance_id + ")." );
            console.log(wine[4].name + " " + wine[4].year + " (" + wine[4].grapes + ") " + "of " + wine[4].region + ", " + wine[4].country + ": " + wine[4].description + " Price: $" + wine[4].price + "; " + "ID: #" + wine[4].id + ". " + "(Additional info: Created at: " + wine[4].created_at + "; " + "Updated at: " + wine[4].updated_at + "; " + "Image: " + wine[4].picture + "; " + "Instance ID: #" + wine[4].instance_id + ")." );
            console.log(wine[5].name + " " + wine[5].year + " (" + wine[5].grapes + ") " + "of " + wine[5].region + ", " + wine[5].country + ": " + wine[5].description + " Price: $" + wine[5].price + "; " + "ID: #" + wine[5].id + ". " + "(Additional info: Created at: " + wine[5].created_at + "; " + "Updated at: " + wine[5].updated_at + "; " + "Image: " + wine[5].picture + "; " + "Instance ID: #" + wine[5].instance_id + ")." );
            console.log(wine[6].name + " " + wine[6].year + " (" + wine[6].grapes + ") " + "of " + wine[6].region + ", " + wine[6].country + ": " + wine[6].description + " Price: $" + wine[6].price + "; " + "ID: #" + wine[6].id + ". " + "(Additional info: Created at: " + wine[6].created_at + "; " + "Updated at: " + wine[6].updated_at + "; " + "Image: " + wine[6].picture + "; " + "Instance ID: #" + wine[6].instance_id + ")." );
            console.log(wine[7].name + " " + wine[7].year + " (" + wine[7].grapes + ") " + "of " + wine[7].region + ", " + wine[7].country + ": " + wine[7].description + " Price: $" + wine[7].price + "; " + "ID: #" + wine[7].id + ". " + "(Additional info: Created at: " + wine[7].created_at + "; " + "Updated at: " + wine[7].updated_at + "; " + "Image: " + wine[7].picture + "; " + "Instance ID: #" + wine[7].instance_id + ")." );
        },
        error: function() {
            alert("Uh oh!");
        }

    });

});
