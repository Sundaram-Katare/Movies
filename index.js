const headImages = ["./Images/harryPotter.jpg", "./Images/inside-out-2.webp", "./Images/endgame.jpg", "./Images/squid-game.jpg" , "./Images/Thukra.jpg"];

let index = 0;

const headImg = document.getElementById("headImage");

function display() {

    headImg.classList.add("hidden");

    setTimeout(() => {
        const imgUrl = headImages[index];
        headImg.src = imgUrl;

        index++;
        if (index === headImages.length) {
            index = 0;
        }
        headImg.classList.remove("hidden");
    }, 800); 

    setTimeout(display, 3000); 
}

display();

const subsBtn = document.getElementById("subs");
subsBtn.addEventListener("click" , appear);

// const watchEl = document.getElementById("watch");

// watchEl.addEventListener("click" , () => {
//     console.log("hi");
//     const trailerBox = document.createElement("div");
//     trailerBox.classList.add("image-box");
//     trailerBox.classList.add("text");

//     const vid = document.createElement("video");
//     vid.controls = true; 

//     const source = document.createElement("source"); 
//     source.type = "video/mp4"; // Spe
//     source.src = "https://imdb-video.media-imdb.com/vi1023514905/1434659607842-pgv4ql-1616202457209.mp4?Expires=1735240017&Signature=Krd8FJduIJSGglOFOwD6gZUTm2ytsEPtwY02mJkVOmPlzpxXQdKUhbL7CajJ~lMgZisXBQ84kMagcJzFgqotkX1N6~m91QIKHbknWB3r3zrhWe8H0Glc5VEYDgtD06PEosaEd7FdujtxMdUp9W91jeujHkwgwWSDK6oUGmc7Tx7jC8yAyIYTfVo4~V6YmFr0yMUCgUVIkZYsHBkzFGo~z8zNiyayanqCdaJY20NWKzZJEGfXUcEtUPaPuI36SeSAc3VANDrcNLsSGzT4AuxS~jqbS4rTHW4afuk0vH4LQS2HiR9enwCkZJBsOKV8o3rBDwyo4zFxoiNZCAgGgkSYTQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
//     vid.appendChild(source);

//     trailerBox.appendChild(vid);

//     document.body.appendChild(trailerBox);
// })
// Loop through all slider containers
document.querySelectorAll(".indiaTop").forEach((sliderContainer) => {
    const favBtns = sliderContainer.querySelectorAll(".favIcon");
    const list = sliderContainer.querySelector(".list");
    const buttonLeft = sliderContainer.querySelector("#buttonLeft");
    const buttonRight = sliderContainer.querySelector("#buttonRight");
  
    let currentPosition = 0;
    const slideWidth = 250; // Image width + gap (adjust if necessary)
    const maxSlides = list.querySelectorAll(".listItem").length;
  
    // Add "Add to Favourites" functionality
    favBtns.forEach((item) => {
      item.addEventListener("click", () => {
        item.style.backgroundColor = "red";
        item.innerHTML = "Added to Favourites";
      });
    });
  
    // Add sliding functionality
    buttonLeft.addEventListener("click", () => {
      currentPosition = Math.min(currentPosition + slideWidth, 0); // 0  + 250 
      list.style.transform = `translateX(${currentPosition}px)`;
    });
  
    buttonRight.addEventListener("click", () => {
      currentPosition = Math.max(
        currentPosition - slideWidth,
        -(maxSlides * slideWidth - sliderContainer.offsetWidth)
      );
      list.style.transform = `translateX(${currentPosition}px)`;
    });
  });
  

  var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");
const bod = document.getElementsByTagName("*");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener("click", appear);

function appear() {
  modal.style.display = "block";
  bod.style.opacity = 0.5;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  bod.style.opacity = 1;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const month = document.getElementsByClassName("plan");
let c = 0;

setInterval(() => {
  if (c === 0) {
    for (let i = 0; i < month.length; i++) {
      month[i].classList.add("ba");
      month[i].classList.remove("ab");
    }
    c = 1;
  } else {
    for (let i = 0; i < month.length; i++) {
      month[i].classList.add("ab");
      month[i].classList.remove("ba");
    }
    c = 0;
  }
}, 1000);
