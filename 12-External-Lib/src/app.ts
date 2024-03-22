import { Product } from "./product.model";

const products = [
  { title: "carpet", price: 23.23 },
  { title: "table", price: 23.23 },
];

const loadedProducts = products.map((product) => {
  return new Product(product.title, product.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
