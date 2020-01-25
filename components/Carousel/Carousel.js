/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarouselComponent(){
  const carouselDiv = document.createElement('div');
  const leftButtonDiv = document.createElement('div');
  const image1Img = document.createElement('img');
  const image2Img = document.createElement('img');
  const image3Img = document.createElement('img');
  const image4Img = document.createElement('img');
  const rightButtonDiv = document.createElement('div');

  carouselDiv.classList.add('carousel');
  leftButtonDiv.classList.add('left-button');
  rightButtonDiv.classList.add('right-button');
  leftButtonDiv.textContent = '◄';
  rightButtonDiv.textContent = '►';
  image1Img.setAttribute('src','./assets/carousel/mountains.jpeg');
  image2Img.setAttribute('src','./assets/carousel/computer.jpeg');
  image3Img.setAttribute('src','./assets/carousel/trees.jpeg');
  image4Img.setAttribute('src','./assets/carousel/turntable.jpeg');

  carouselDiv.appendChild(image1Img);
  carouselDiv.appendChild(image2Img);
  carouselDiv.appendChild(image3Img);
  carouselDiv.appendChild(image4Img);
  carouselDiv.appendChild(leftButtonDiv);
  carouselDiv.appendChild(rightButtonDiv);
  document.querySelector('.carousel-container').appendChild(carouselDiv);

  image1Img.style.display = 'block';
  // image2Img.style.display = 'block';
  // image3Img.style.display = 'block';
  // image4Img.style.display = 'block';
  image2Img.style.transform = ('scale(0)');
  image3Img.style.transform = ('scale(0)');
  image4Img.style.transform = ('scale(0)');


  image1Img.style.position = 'absolute';
  image2Img.style.position = 'absolute';
  image3Img.style.position = 'absolute';
  image4Img.style.position = 'absolute';

  // image1Img.style.zIndex = '-2';
  // image2Img.style.zIndex = '-2';
  // image3Img.style.zIndex = '-2';
  // image4Img.style.zIndex = '-2';
  // leftButtonDiv.style.zIndex = '0';
  // rightButtonDiv.style.zIndex = '0';


  let index = 0;
  let images = [image1Img,image2Img,image3Img,image4Img];
  let current = 0;
  let transitionTime = 0.5;
  const slide = event => {
    let target = event.target;
    if(target.classList.contains('left-button')){
      if(index===0){
        index = images.length-1;
      }
      else{
        index--;
      }
    }
    else{
      if(index===images.length-1){
        index = 0;
      }
      else{
        index++;
      }
    }
    console.log(`${current.toString()} ${index.toString()}`);
    //----------animate here---
    images[current].style.transform = 'scale(0)';
    images[current].style.transition = `transform ${transitionTime.toString()}s`;
    images[index].style.display = 'block';

    setTimeout(()=>{;
      images[current].style.display = 'none';
      current = index;
      images[index].style.transform = 'scale(1)';
      images[index].style.transition = `transform ${transitionTime.toString()}s`;
    }
    ,transitionTime*1000);
    //-------------------------
  };

  leftButtonDiv.addEventListener('click',slide);
  rightButtonDiv.addEventListener('click',slide);

}
createCarouselComponent();
