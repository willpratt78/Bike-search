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
    // let letterNumber = /^[0-9a-zA-Z]+$/;\s/


    BikeSearch.getBike(location, color, distance)
      .then(function(response){
        let stolenBikeObj = response.bikes;
        console.log(stolenBikeObj);

        stolenBikeObj.forEach(function(e){
          let descriptionBlank = "nothing inputted";
          let frameModelBlank = "nothing inputted";
          
          if (e.description === null && e.frame_model === null){
            eliminator(descriptionBlank, frameModelBlank);
          } else if (e.description === null && e.frame_model !== null) {
            spaceChecker(e.frame_model)
            eliminator(descriptionBlank, e.frame_model);
          } else if (e.description !== null && e.frame_model === null){
            spaceChecker(e.description)
            eliminator(e.description && frameModelBlank);
          } else{
            spaceChecker(e.description, e.frame_model)
            eliminator(e.description, e.frame_model);
          }

        });
      });
  });

});



// function ifBlank(description, frameModel){
//   if (description === '' && frameModel === ''){

//   } else if (description === ''){

//   } else if (frameModel === ''){

//   }
// }

function eliminator(description, frameModel){
  $("#output").append(`
  <div class="stolen"> 
   <ul class="newStolenBike">
    <li>Description: ${description}</li>
    <li>Frame Model: ${frameModel}</li>
   </ul>
  </div>
  `);
}

function spaceChecker(description, frameModel) {
  let description1 = description.replace(/\s/g, '');
  let frameModel1 = frameModel.replace(/\s/g, '');

  if(description1 === "") {
    description = null
  }
  if(frameModel1 === "") {
    frameModel = null
  } 
}




// e.description = "" || e.description = "description"
// e.frame_model = "" || e.frame_model = "frame_model"

// if e.description === "" && e.frame_model === " "
//   return ""
// else
//   eliminator(e.description, e.frame_model)


// BikeSearch.getBike(location, color, distance)
// .then(function(response){
//   let stolenBikeObj = response.bikes;
//   stolenBikeObj.forEach(function(e){
//     if(e.description === null || e.frame_model === null) {
//       return "";
//     }else if (distance === "") {
//       distance = 10;
//       return $("#output").append("<div class=stolen>" + e.description + e.frame_model +  "</div>");
//     }else{
//     $("#output").append("<div class=stolen>" + e.description + e.frame_model +  "</div>");
//     }
//   });
// });

// });

// });