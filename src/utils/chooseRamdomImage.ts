const imagesArray = [
  "/images/main01.jpg",
  "/images/main02.jpg",
  "/images/main03.jpg",
  "/images/main04.jpg",
  "/images/main05.jpg",
  "/images/main06.jpg",
  "/images/main07.jpg",
  "/images/main08.jpg",
  "/images/main09.jpg",
  "/images/main10.jpg",
];

export function chooseRamdomImage(): string {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);

  const srcImage = imagesArray[randomIndex];

  return srcImage;
}
