
  const images = [
    "images/A.jpg",
    "images/B.jpg",
    "images/C.jpg",
    "images/D.jpg",
    "images/E.jpg",
    "images/F.png",
    "images/G.jpg",
    "images/H.jpg",
    "images/I.JPG"
  ];

  const imgElements = document.querySelectorAll(".gallery img");
  let startIndex = 0; // first visible image

  function updateImages() {
    for (let i = 0; i < imgElements.length; i++) {
      const imgIndex = (startIndex + i) % images.length;
      imgElements[i].src = images[imgIndex];
    }
  }

  document.querySelector(".next").addEventListener("click", () => {
    startIndex = (startIndex + 1) % images.length;
    updateImages();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    startIndex = (startIndex - 1 + images.length) % images.length;
    updateImages();
  });

  // Initialize first view
  updateImages();

