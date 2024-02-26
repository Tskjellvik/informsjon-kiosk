let imageIndex = 1; // Initial image index
let totalImages = 3; // Total number of images
let filePath = '/txt/btxt1.txt'

const loc = ['Oslo', 'Bergen', 'Trondheim']

let cityName = loc[0];


$(document).ready(function() {
  console.log('jQuery is working');
});



changeText();
værFunk();

//vær api
function værFunk() {
  $(document).ready(function() {
    // Erstatt 'DIN_API_NØKKEL' med den faktiske API-nøkkelen du har fra WeatherAPI
    let apiKey = '842f9ab3f31f4049b98114217240202';
    let baseUrl = 'https://api.weatherapi.com/v1/current.json';
    
  
    // Lag URL for forespørselen
    let url = `${baseUrl}?key=${apiKey}&q=${cityName}`;
  
    // Send forespørsel til WeatherAPI
    $.get(url, function(data) {
        // Oppdater HTML med værdata
        $('#city').text(cityName);
        $('#temperature').text(data.current.temp_c);
        $('#weatherCondition').text(data.current.condition.text);
    }).fail(function() {
        // Hvis forespørselen mislykkes, gi beskjed til brukeren
        alert('Feil ved henting av værdata.');
    });
  });
}




//logic til endring av bilder og tekst

//opdaterer tekst boksen
function changeText(){
  console.log('Kjører chtxt & chimg funksjon');
  fetch(filePath)
          .then(response => response.text())
          .then(data => {
              // Display the content in a <pre> element
              document.getElementById('fileContent').textContent = data;
          })
          .catch(error => console.error('Error:', error));
}


function changeImage() {
  imageIndex = (imageIndex % totalImages) + 1; // Increment image index and reset if it exceeds the total number of images
  let imageSrc = "/img/bilde" + imageIndex + ".jpg"; // Construct the new image source
  //txt inplement
  filePath = '/txt/btxt' + imageIndex + '.txt';
  // loc chang
  console.log(cityName);
  cityName = loc[imageIndex - 1];
  console.log(cityName );
  værFunk();
  let test = document.getElementById("myImage") 
  test.src = imageSrc; // Update the image source
  changeText(); //updates the txt box
  console.log(imageIndex);
}

function changeImageDn() {
  imageIndex = (imageIndex - 1 + totalImages) % totalImages; // Decrement image index and wrap around if it goes below 1
  if (imageIndex == 0) {
      imageIndex = 3
  }
  let imageSrc = "/img/bilde" + imageIndex + ".jpg"; // Construct the new image source
  //txt inplement
  filePath = '/txt/btxt' + imageIndex + '.txt';
  // loc chang
  console.log(cityName);
  cityName = loc[imageIndex - 1];
  console.log(cityName );
  værFunk();
  let ape = document.getElementById("myImage")
  ape.src = imageSrc; // Update the image source
  changeText(); //updates the txt box
  console.log(imageIndex)};