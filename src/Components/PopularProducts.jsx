import { products } from "../Constants/index";
import PopularProductsCart from "../BaseComponents/PopularProductsCart";
const PopularProducts = () => {
  return (
    <section
      id="products"
      className="flex flex-col justify-start max-container max-sm:mt-12 "
    >
      <div className="flex flex-col justify-start w-full leading-snug sm:justify-center max-sm:w-full max-sm:items-center">
        <h2 className="font-bold text-4xl sm:text-left text-center">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-grey lg:max-w-lg mt-2 sm:text-left text-center">
          Experience Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          ea quisquam recusandae esse quis labore modi culpa praesentium
          explicabo. At!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
        {products.map((product) => (
          <PopularProductsCart
            key={product.name}
            {...product}
          ></PopularProductsCart>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
