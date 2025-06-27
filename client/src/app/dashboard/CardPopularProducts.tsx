"use client";
import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className='row-span-3 xl:row-span-6 bg-white shadow-sm'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3 className='font-semibold text-lg px-7 pt-5 pb-2'>Popular Products</h3>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
