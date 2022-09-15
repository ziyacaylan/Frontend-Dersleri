// Verilen kelimenin palindrom olup olmadığını bulan fonksiyon

function palindrome(str) {
  //TODO
  let onlyLetters = str
    .replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .toLowerCase();

  let left = 0;
  let right = onlyLetters.trim().length - 1;

  while (left < right) {
    let cLeft = onlyLetters.substr(left, 1);
    let cRight = onlyLetters.substr(right, 1);

    if (cLeft === cRight) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /- :) 0-0"));
console.log(palindrome("five|_/|four"));

let str = "Ey Edip Adana'da pide ye!";
console.log(
  `"${str}" kelimesi bir `,
  palindrome(str) ? "palindromdur." : "palindrom değildir."
);

str = "Anastas mum satsana";
console.log(
  `"${str}" kelimesi bir `,
  palindrome(str) ? "palindromdur." : "palindrom değildir."
);

str = "Ali Papila";
console.log(
  `"${str}" kelimesi bir `,
  palindrome(str) ? "palindromdur." : "palindrom değildir."
);
