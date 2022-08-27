/*Biz dizi veya film listesini parametre olarak alan bir arrow fonksiyon yazalım. Verdiğimiz parametreleri 1-den başlayarak alt alta yazdıran fonksiyonu yazalım. */

const myFavoriteMovies = (movieList) => {
  movieList.forEach((movie, index) => {
    console.log(`${index + 1}: ${movie}`);
  });
};

myFavoriteMovies([
  "The Martian",
  "Passengers",
  "Fast&Furious Series",
  "Marvel Series",
  "Top Gun: Maverick",
]);

/*[1,2,3,4,5] aarayini alan bir arrow fonksiyon yazalım. Fonksiyon bu arrayi alsın ve sonuçta bize gene bir array dönsün. Geriye dönen bu yeni array ilk aldığı arraydeki tek sayiları 3, çift sayıları ise 2 ile çarpımından oluşsun.
 */

const newArray = (arr) =>
  arr.map((number) => (number % 2 == 0 ? number * 2 : number * 3));

let myArr = newArray([1, 2, 3, 4, 5]);
console.log(myArr);
