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
    typeTree: "Mevali yongoq daraxti",
    guiltyPerson: "'Ziyo' mahalla fuqarolar yigini",
    location:
      "O'zbekiston, 10000, Toshkent, Olmazor tumani, Ziyo mahllasi, Talabarlar ko'chasi 4/2",
    className: "garden__pine tree-one",
    title: "This is tree one",
    description: "Hello, save the tree",
    thumbnail: pine,
    images: [demo1, demo2, demo3],
  },
  {
    id: "2",
    region: "Tashkent",
    city: "Olmazor tumani",
    typeTree: "Mevali yongoq daraxti",
    guiltyPerson: "'Ziyo' mahalla fuqarolar yigini",
    location:
      "O'zbekiston, 10000, Toshkent, Olmazor tumani, Ziyo mahllasi, Talabarlar ko'chasi 4/2",
    className: "garden__pine tree-two",
    title: "This is tree two",
    description: "Hello, save the tree",
    thumbnail: pine,
    images: [demo2, demo1, demo3],
  },
  {
    id: "3",
    region: "Tashkent",
    city: "Olmazor tumani",
    typeTree: "Mevali yongoq daraxti",
    guiltyPerson: "'Ziyo' mahalla fuqarolar yigini",
    location:
      "O'zbekiston, 10000, Toshkent, Olmazor tumani, Ziyo mahllasi, Talabarlar ko'chasi 4/2",
    className: "garden__pine tree-three",
    title: "This is tree three",
    description: "Hello, save the tree",
    thumbnail: pine,
    images: [demo3, demo2, demo1],
  },
];
