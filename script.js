class Carousel {
  constructor(images, imageElement) {
    this.images = images;
    this.imageElement = imageElement;
    this.current = 0;
  }

  show(index) {
    this.imageElement.src = this.images[index];
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
    this.show(this.current);
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
    this.show(this.current);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("carousel-image");
  const carousel = new Carousel(["desktop wallpaper hd (1).jpeg", "image_2023-12-09_15-36-58.png", "IMG_6335.JPG"], imageElement);
  carousel.show(0);

  document.getElementById("next").addEventListener("click", () => carousel.next());
  document.getElementById("prev").addEventListener("click", () => carousel.prev());
});
