"use client";
import Homebakery from "./Homebakery/page";
import ShoppingcartcontextProvider from "../../public/context/page";
export default function Home() {
  return (
    <>
      <ShoppingcartcontextProvider>
        <Homebakery />
      </ShoppingcartcontextProvider>
    </>
  );
}
