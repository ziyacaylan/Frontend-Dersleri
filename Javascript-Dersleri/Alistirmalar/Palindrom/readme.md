# Palindrom Fonksiyonu

**Bu fonksiyon freecodecamp challenge sorusu ve bir çok yerde ve yazılım dünyasında özellikle mülakatlarda karşımıza çıkabilecek bir sorudur.**

**-->**[freecodecamp Profilim](https://www.freecodecamp.org/ziya_caylan)  
**-->**[Patika.dev Profilim](https://app.patika.dev/ziyacaylangmailcom)  
**-->**[codepen Profilim](https://codepen.io/ziya-c)
**-->**[linkedin Profilim](https://www.linkedin.com/in/ziya-caylan/)

## Challenge

- Parametresi ile aldığı bir yazının palindrom olup olmadığını test eden palindrome metodunu yazınız.
- Örnekler :  
  Ey Edip Adana'da pide ye! -> eyedipadanadapideye  
  Anastas mum satsana -> anastasmumsatsana  
  Ali Papila -> alipapila

- Test edilecek kodlar aşağıdaki gibidir.  
  palindrome("eye")  
  palindrome("eye")  
  palindrome("\_eye")  
  palindrome("race car")  
  palindrome("not a palindrome")  
  palindrome("A man, a plan, a canal. Panama")  
  palindrome("never odd or even")  
  palindrome("nope")  
  palindrome("almostomla")  
  palindrome("My age is 0, 0 si ega ym.")  
  palindrome("1 eye for of 1 eye.")  
  palindrome("0_0 (: /-\ :) 0-0")  
  palindrome("five|\_/|four")

  let str = "Ey Edip Adana'da pide ye!";  
  console.log(`"${str}" kelimesi bir `,palindrome(str) ? "palindromdur." : "palindrom değildir.");

  str = "Anastas mum satsana";  
  console.log(`"${str}" kelimesi bir `,palindrome(str) ? "palindromdur." : "palindrom değildir.");

  str = "Ali Papila";  
  console.log(`"${str}" kelimesi bir `,palindrome(str) ? "palindromdur." : "palindrom değildir.");

  **ANAHTAR NOTLAR :**  
  Palindrom: Yalnızca alfabetik karakterleri tersten okunduğunda aynı olan yazılara palindrom denir. Detayların gözardı edilmesi koşuluyla bu tanım yazılabilir.

## ÇÖZÜM

```
true
true
true
true
false
true
true
false
false
true
false
true
false
"Ey Edip Adana'da pide ye!" kelimesi bir  palindromdur.
"Anastas mum satsana" kelimesi bir  palindromdur.
"Ali Papila" kelimesi bir  palindromdur.
```
