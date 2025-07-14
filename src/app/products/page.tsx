"use client";

import React, { useEffect, useState } from "react";
import Product from "../../../public/component/Product/page";

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  quantity: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pro")
      .then((res) => res.json())
      .then((data) => {
        // جرّب هل البيانات جاية عادي ولا جوا $values
        console.log("🚀 Data from API:", data); // 👈 اطبع هنا
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data?.$values)) {
          setProducts(data.$values);
        } else {
          console.error("Unexpected API format:", data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء جلب المنتجات:", error);
        setIsLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">جارٍ التحميل...</p>;
  }

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold text-center mb-8">منتجاتنا 🍞</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">لا يوجد منتجات حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
