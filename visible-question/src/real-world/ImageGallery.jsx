import React from "react";
/*
An image gallery is a set of images with corresponding remove buttons. 
This is the HTML code for a gallery with two images:
<div>
  <div class="image">
    <img src="https://bit.ly/3lmYVna">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj">
    <button class="remove">X</button>
  </div>
</div>
Implement the ImageGallery component that accepts a links prop and renders the gallery described above 
so that the first item in the links prop is the src attribute of the first image in the gallery. 
It should also implement the following logic: When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
For example, after the first image has been removed from the gallery above, it's HTML code should look like this:
<div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj">
    <button class="remove">X</button>
  </div>
</div>
*/
class ImageGallery extends React.Component {
  render() {
    return null;
  }
}

export default () => {
  const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
  return <ImageGallery links={links} />;
};

// document.querySelectorAll('.remove')[0].click();
