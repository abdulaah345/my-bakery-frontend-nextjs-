"use client";

import React, { useContext } from "react";
import Cartitem from "../../../public/component/cartitem/page";
import { Shoppingcartcontext } from "../context/page";

const Cartitems = () => {
  const { cartitems } = useContext(Shoppingcartcontext);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {cartitems.map((item) => (
          <Cartitem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cartitems;
