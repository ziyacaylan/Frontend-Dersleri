const names = [
  "ziya",
  "ali",
  "veli",
  "hasan",
  "eda",
  "meda",
  "seda",
  "ecrin",
  "mecrin",
];

const newNames = names.map((oneName) => oneName.toUpperCase());

console.log(names); // ['ziya','ali','veli','hasan','eda','meda', 'seda','ecrin','mecrin']
console.log(newNames); //['ZIYA','ALI','VELI','HASAN','EDA','MEDA','SEDA','ECRIN','MECRIN']

const USER_OBJ = names.map((user) => ({
  userName: `${user}`,
  shortName: `${user[0].toUpperCase()}`,
  newName: `${user[0].toUpperCase()}${user.slice(1).toLocaleLowerCase()}`,
}));
console.log(USER_OBJ);

// Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];

const newSalary = maaslar.map((salary) =>
  salary > 3000 ? Math.round(salary * 1.15) : Math.round(salary * 1.25)
);

console.log(`eski maaşlar: ${maaslar}`); // eski maaşlar: 1100,13000,2500,4500,1500,25000,2000
console.log(`Zamlı maaşlar: ${newSalary}`); // Zamlı maaşlar: 1375,14950,3125,5175,1875,28750,2500
