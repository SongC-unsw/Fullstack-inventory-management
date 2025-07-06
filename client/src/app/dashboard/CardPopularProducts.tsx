"use client";
import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "../(components)/Rating";
import Image from "next/image";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="bg-white shadow-md rounded-2xl pb-16 row-span-3 xl:row-span-6">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="font-semibold text-lg px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr className="border-gray-300" />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b border-gray-300"
              >
                {/* Left side*/}
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={`https://s3-inventorybucket-root.s3.ap-southeast-1.amazonaws.com/product${
                        Math.floor(Math.random() * 3) + 1
                      }.png`}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="h-full object-cover rounded-lg w-14 h-14"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-1">
                    {/* Product name and price and rating, that's why flex-col*/}
                    <div className="font-bold text-gray-700">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />{" "}
                    </div>
                  </div>
                </div>
                {/* Right side*/}
                <div className="flex items-center text-xs">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k Sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
