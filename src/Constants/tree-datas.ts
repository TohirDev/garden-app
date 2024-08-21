import demo1 from "../../public/demo1.jpeg";
import demo2 from "../../public/demo2.jpeg";
import demo3 from "../../public/demo3.jpeg";
import pine from "../../public/pine.png";
import { TTrees } from "../Types";

export const trees: TTrees[] = [
  {
    id: "1",
    region: "Tashkent",
    city: "Olmazor tumani",
    typeTree: "Mevali olma daraxti",
    guiltyPerson: "'Ziyo' mahalla fuqarolar yigini",
    location:
      "O'zbekiston, 10000, Toshkent, Olmazor tumani, Ziyo mahllasi, Talabarlar ko'chasi 4/2",
    className: "garden__pine tree-one",
    title: "Olma daraxti",
    description:
      "Olma (lotincha: Malus) — raʼnodoshlar oilasiga mansub, barg toʻkuvchi daraxtlar yoki butalar turkumi; urugʻli meva daraxti. Shimoliy va janubiy yarim sharning moʻtadil mintaqalarida olmaning 25— 30 turi, jumladan, Sharqiy Osiyo, Oʻrta Osiyo va Kavkazda 10 xil turi tarqalgan. Ekiladigan mevali daraxtlar orasida maydoni jihatidan birinchi oʻrinda turadi.",
    thumbnail: pine,
    images: [demo1, demo2, demo3],
  },
  {
    id: "2",
    region: "Tashkent",
    city: "Olmazor tumani",
    typeTree: "Mevali gilos daraxti",
    guiltyPerson: "'Ziyo' mahalla fuqarolar yigini",
    location:
      "O'zbekiston, 10000, Toshkent, Olmazor tumani, Ziyo mahllasi, Talabarlar ko'chasi 4/2",
    className: "garden__pine tree-two",
    title: "Gilos daraxti",
    description:
      "Olcha (Cerasus) — raʼnodoshlar oilasiga mansub barg toʻkuvchi daraxtlar turkumi; mevali daraxt, 150 ga yaqin turi bor. Asosan, Osiyoda, shu jumladan, Oʻrta Osiyo va Kavkazda 25 ga yaqin turi usadi. Madaniy turlaridan oddiy O. (C.vulgaris) koʻp tarqalgan. Juda qadimdan Markaziy va Jan. Yevropada, Shim. Afrika, Sharq-iy Osiyo, Shim. Amerikada ekiladi.",
    thumbnail: pine,
    images: [demo2, demo1, demo3],
  },
  {
    id: "3",
    region: "Tashkent",
    city: "Olmazor tumani",
    typeTree: "Mevali anor daraxti",
    guiltyPerson: "'Ziyo' mahalla fuqarolar yigini",
    location:
      "O'zbekiston, 10000, Toshkent, Olmazor tumani, Ziyo mahllasi, Talabarlar ko'chasi 4/2",
    className: "garden__pine tree-three",
    title: "Anor daraxti",
    description:
      "Oddiy anor ( lotincha: Púnica granátum) — derbenlar oilasiga  (Lythraceae) turkumiga mansub o‘simlik turi, mevasi iste’molga yaroqli. Anor mevalarini ozuqa mevasi sifatida xom holda, tayyor ovqatga solishda, shuningdek, sharbatini olib, ichimlik sifatida foydalanish mumkin.",
    thumbnail: pine,
    images: [demo3, demo2, demo1],
  },
];
