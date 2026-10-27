//
// 1-masala. Sonlarni chiqarish
// Qiyinlik: 1/10
// for loop yordamida 1 dan 10 gacha bo‘lgan sonlarni konsolga chiqaring
//
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
//
//====================================================================================
//
// 2-masala. Juft sonlar
// Qiyinlik: 2/10
// 1 dan 30 gacha bo‘lgan sonlar orasidan faqat juft sonlarni konsolga chiqaring
//
// for (i = 1; i <= 30; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//
//========================================================================================
//
// 3-masala. Sonlar yig‘indisi
// Qiyinlik: 3/10
// 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang
//
// let yigindi = 0;
// for (let i = 0; i <= 50; i++) {
//   yigindi += i;
// }
// console.log(yigindi);
//
//=============================================================================================
//
// 4-masala. Toq sonlar yig‘indisi
// Qiyinlik: 4/10
// 1 dan 100 gacha bo‘lgan toq sonlarning yig‘indisini hisoblang va natijani konsolga chiqaring
//
// let yigindi = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     yigindi += i;
//   }
// }
// console.log(yigindi);
//
//=========================================================================================
//
// 5-masala. 3 ga bo‘linadigan sonlar
// Qiyinlik: 5/10
// 1 dan 100 gacha bo‘lgan sonlar ichidan 3 ga qoldiqsiz bo‘linadigan sonlarni chiqaring. Shu
// sonlarning nechta ekanini ham aniqlang.
//
// let soni = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//     soni++;
//   }
// }
// console.log(`3ga qoldiqsiz bo'linadigan sonlar ${soni} ta`);
//
//================================================================================================
//
// 6-masala. Sonning ko‘paytirish jadvali
// Qiyinlik: 5/10
// let number = 7 deb o‘zgaruvchi yarating. Loop yordamida shu sonning 1 dan 10 gacha ko‘paytirish
// jadvalini chiqaring.
// Masalan: 7 x 1 = 7, 7 x 2 = 14 va hokazo
//
// let number = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 x ${i} = ${number * i}`);
// }
//
//=========================================================================================
//
// 7-masala. Musbat va manfiy sonlarar son manfiy bo‘lsa,
// Qiyinlik: 6/10
// let number = -15 deb o‘zgaruvchi yarating. Agar son musbat bo‘lsa, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son manfiy bolsa, uning modulini aniqlab, 1 dan shu songacha bo‘lgan
// sonlarni chiqaring. Agar son 0 bo‘lsa, “Son nolga teng” xabarini chiqaring
//
// let number = -15;
// if (number > 0) {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else if (number < 0) {
//   number = number + -2 * number;
//   for (i = 1; i <= number; i++) {
//     console.log(i);
//   }
// } else {
//   console.log(`Son nolga teng`);
// }
//
//==============================================================================================================
//
// 8-masala. Raqamni topish
// Qiyinlik: 6/10
// let secretNumber = 8 deb belgilang. 1 dan 10 gacha bo‘lgan sonlarni loop yordamida tekshiring. Son
// secretNumber ga teng bo‘lsa, “Son topildi” deb chiqaring. Qolgan sonlar uchun “Bu son emas” deb
// chiqaring.
// Qo‘shimcha shart: son topilgandan keyin loopni break yordamida to‘xtating
//
// let secretNumber = 8;
// for (let i = 1; i <= 10; i++) {
//   if (i == secretNumber) {
//     console.log(`Son topildi`);
//   } else {
//     console.log(`Bu son emas`);
//   }
//   if (i == secretNumber) {
//     break;
//   }
// }
//
//==============================================================================================================
//
// 9-masala. Sonning raqamlarini sanash
// Qiyinlik: 7/10
// let number = 58324 soni berilgan. Uning nechta raqamdan iborat ekanini loop yordamida aniqlang
//
// let number = 58324;
// let raqam = 0;
// for (let i = 0; i <= 10; ) {
//   number = parseInt(number / 10);
//   raqam++;
//   if (number == 0) {
//     break;
//   }
// }
// console.log(`Son ${raqam} ta raqamdan iborat`);
//
//==============================================================================================================
//
// 10-masala. Mukammal sonni aniqlash
// Qiyinlik: 8/10
// Mukammal son — o‘zidan tashqari barcha musbat bo‘luvchilarining yig‘indisi o‘ziga teng bo‘lgan son.
// Masalan, 6 mukammal son, chunki 1 + 2 + 3 = 6. let number = 28 deb o‘zgaruvchi yarating va loop
// yordamida bu son mukammal yoki mukammal emasligini aniqlang.
//
let number = 28;
let boluvchi = 0;
for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    boluvchi = boluvchi + i;
  }
}
if (boluvchi == number) {
  console.log(`Bu son mukammal`);
} else console.log(`Bu son mukammal emas`);

//
