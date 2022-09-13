# <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">

# Versiyon Kontrol Sistemi (Git) İleri Seviye

**ANAHTAR NOTLAR :**
Bu eğitim içeriğinde git (versiyon kontol sisteminin)'in biraz daha derinlerine inerek biraz daha detaylandıracağız. Diyelim ki bir takım halinde çalışıyoruz. Elimizdeki projenin bir kısmını biz bir kısmını ise farklı takım arkadaşlarımız geliştiriyor olsun. İşte bu gibi durumlar için neler yaparız, haydi birlikte bakalım.  
İlk olarak _readme.md_ dosyamızdaki değişiklikleri versiyon kontrol sistemine ekleyelim.

```
git add . //  son değişiklikler versiyonlanmak üzere ekledik.
git commit -- amend -m // bu komut ile en son yaptığımız commit içerisine ekledik. Ve sonuna da bir mesaj verdik. Mevcut mesaj da değiştirilmiş oldu
```

bir commit işlemini geri alma

```
git revert [commit id'si]  //geri almak istediğimiz commit id'sini verdik ve geri alırken bizden yeni bir commit açıklaması girmemizi bekler
```

bir commit işlemini silme

```
git revert [commit id'si]  // id si girilen commiti siler ve bizden bir açıklama bekler girilen açıklama ile yeni bir commit oluşturur
```

sondan 3 commiti bana getir

```
git log -n 3 // son 3 commiti log'lar
```

bazen aradan bir commit i de silmek isteriz ancak burada dikkat etmemiz gereken noktalar var.

```
git reset --hard [silinecek id] // şayet aradan bir commit siliyorsan silmek istediğmiiz committen başlayarak sonraki commitleride SİLER...!
```

commitler arasındaki farkları görmek istersek

```
git diff [eski commit id'si]..[yeni commit id'si] [dosya adı]
```

yukarıdaki komutta şayet dosya adını sonda vermez isek brançler içerisindeki bütün değişiklikleri bize getirir.

**branch oluşturmak için**

```
git branch [oluşturulacak branch ismi] // branch ismini yazdığımızıd oluşturur ve branch'leri listeler ancak hangi branch'te ise onuda belirtir.
```

**branch'ler arası geçiş yapmak için ise**

```
git checkout header   //  header isimli branch'e geçiş yaptık
```

**hızlı bir şekilde branch oluşturmak ve oluşturur oluşturmaz geçiş yapmak istersek**

```
git checkout -b footer // footer isimli branch oluşturuldu ve geçiş yapıldı
```

**açılan bir branch'i silmek istersek**

```
git branch -D footer  // footer isimli branch silindi
```

**ANAHTAR NOTLAR :**  
-_git checkout_ ile bir branch oluşturduğumuzda dikkat etmemiz gereken bir nokta vardır. Burada branch oluşturulurken, biz o anda hangi branch içerisinde isek onu baz alarak branch oluştuulur.

**son committen itibaren yaptığımız değişiklikleri bir yerde saklamak istersek**

```
git stash  // commit atmayıp çalışma dosyası içerisinde değişiklikleri saklamak için kullanılır. (git log yaptığımızda görünmez)

git stash list  // dersek oluşturduğumuz stash'lerin listesi karşımıza gelecektir.
```

En son yapılan stash' i geri getirmek için _git stash pop_ komutu kullanılır. stash işlemi geri gelir ve stash listesinden de silinir.

```
git stash pop  // en son yapılan stash'i geri getirir. Ve commit etmediğimiz uyarısını bize verir.
```

```
git stash apply [stash id'si]  // vererekte stash listesinden geri getirebiliriz. ancak apply komutu değişikliklweri geri getirir fakat listeden silmez...
git stash clear // saklanan değişiklikleri temizler
```

## Branch'leri birleştirme

En can alıcı bölümlerden birtanesidir. 2 farklı branch üzerinde çalışırken bu branch'leri birleştirilmesi için yapabileceğimiz 2 farklı yöntem bulunmaktadır.  
Bunlardan birincisi _merge_ diğeri ise _rebase_'dir.

```
git merge header  // header ile bulunduğumuz brach'i birleştirir.
git log  // üst satırdaki koddan sona bu komutu çalıştırırsak birleştirilecek brach'lerin bütün commitlerini listeler
```

Yukarıdaki kod ile birleştirme işlemini yaptık ancak herhangi bir birleştirdiğimize dair commit oluşturmadık. Yani bu kod ile commit oluşturulmamaktadır. Bunu farklı bir çalışma arkadaşımızın yada ileride bizim nasıl buraları geliştirdiğimize dair bakmak gerektiğinde incelemek üzere bir commit bırakmak en doğrusu olacaktır. İşte bu ksımda aşağıdaki kodlar imdadımıza yetişecektir.

```
git merge --squash header  // bu kod ile bulunduğumuz branch ile header brac'ini birleştirdik ve bize son bir commit şansı verir
git commit -m "Header Master ile birleştirildi."  // üst satırın bize sunduğu commit burada oluşturuldu.
```

Bazen de diyelim ki header branch'indeyiz ve bir değişiklik yapıp commitledik. Daha sonra master brach'ine geçtik ve burada da header üzerindeki aynı yeri değiştirip gene commitledik. Sonra bunları merge ile tekrar birleştirmek istediğimizde bizim karşımıza bir **_conflict_** çıkar. Ve burada bize hangisinin doğru olduğunu seçmemizi ister. Böyle bir durum yazılımcılar için oldukça sıkıcı bir durum olduğunu belirtmemiz gerekir. Çünkü böyle bir durumda hangisinin doğru olduğunu seçmek, tek başımıza karar vermek projeye yanlış bir seçim yaparsak zarar verebilir. Bu durum istenmeyen bir durum olacaktır. İşte böyle bir durumda yapılan _merge_ işlemi aşağıdaki gibi geri alınabilir.

```
git merge --abort  // eğer merge sonrası conflict çıkarsa yapılan merge işlemi geri alır.
```

Branch birleştirmenin ikinci yolunada biraz göz atalım.

```
git rebase [branch_ismi]  // mevcut branch ile ismini belirttiğimiz branc'i birleştirir.
```

Yukarıdaki komut ile aynı merge işlemini gerçekleştiririz. Farklı olarak ise tüm history'yi tek bir branch altında toplayacaktır ve daha sade bir history sunacaktır. Projede ekip ile çalışıyorsak merge ile branch birleştirmek daha önemlidir. Çünkü geri almak istersek rebase işlemmine göre daha basit ve kolaydır. _rebase_ de ise bu işlem biraz zahmetlidir.

Daha iyi bir şekilde konuyu karvayabilmek için örneğin bir cv projesi olabilir yada daha farklı bir proje oluşturarak _gitHub_ üzerinde bir repo oluşturup buraya sanki bir ekip ile çalışıyormuş gibi bir yapı ile farklı branch'ler oluşturup projenizi farklı parçalara bölerek commitleyiniz ve projeyi burada birleştirmenizi tavsiye ederim. Saygı ve sevgilerimle...
