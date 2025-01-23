import React, { useContext } from 'react';
import "./ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Items/Item';
import kids from "../assets/kids.jpg"


function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  
  // Filter products based on the selected category
  const filteredProducts = all_product.filter(item => {
    console.log(item.category); // Log each item's category for debugging
    return item.category === props.Category;
  });

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Shop Category Banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="Sort Options" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <div className="no-products">
            <img src={kids} alt="" className='kids'/>
          </div>
        )}
      </div>
      <div className="explore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
