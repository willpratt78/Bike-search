import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeSearch from './bike';



$(document).ready(function() {
  $("#button").click(function() {
    let location = $("#location").val();
    let color = $("#color").val();
    let distance = $("#distance").val();
    
    BikeSearch.getBike(location, color, distance)
      .then(function(response){
        let stolenBikeObj = response.bikes;
        stolenBikeObj.forEach(function(e){
          if(e.description === null || e.frame_model === null) {
            return "";
          }else if (distance === "") {
            distance = 10;
            return $("#output").append("<div class=stolen>" + e.description + e.frame_model +  "</div>");
          }else{
          $("#output").append("<div class=stolen>" + e.description + e.frame_model +  "</div>");
          }
        });
      });

  });

});

