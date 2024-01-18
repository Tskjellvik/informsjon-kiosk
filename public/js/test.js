var imageIndex = 1; // Initial image index
var totalImages = 3; // Total number of images

function changeImage() {
    imageIndex = (imageIndex % totalImages) + 1; // Increment image index and reset if it exceeds the total number of images
    let imageSrc = "/img/bilde" + imageIndex + ".jpg"; // Construct the new image source
    let test = document.getElementById("myImage") 
    test.src = imageSrc; // Update the image source
    console.log(imageIndex);
}

function changeImageDn() {
    imageIndex = (imageIndex - 1 + totalImages) % totalImages; // Decrement image index and wrap around if it goes below 1
    if (imageIndex == 0) {
        imageIndex = 3
    }
    let imageSrc = "/img/bilde" + imageIndex + ".jpg"; // Construct the new image source
    let ape = document.getElementById("myImage")
    ape.src = imageSrc; // Update the image source
    console.log(imageIndex);
}
