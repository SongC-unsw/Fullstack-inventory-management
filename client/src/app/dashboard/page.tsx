import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
        {/* <div className="row-span-3 xl:row-span-6"> */}
        {/* Popular products */}
        <CardPopularProducts />
        {/* </div> */}

        {/* <div className="bg-red-400 row-span-3 xl:row-span-6"> */}
        {/* Sales Summary */}
        <CardSalesSummary />
        {/* </div> */}
        {/* <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1"> */}
        {/* Purchase Summary */}
        <CardPurchaseSummary />
        {/* </div> */}
        {/* <div className="bg-black row-span-3">D</div> */}
        <CardExpenseSummary />
        {/* Card expense summary  */}
        <StatCard
          title="Customer & Expenses"
          primaryIcon={<Package className="text-blue-500 w-6 h-6" />}
          details={[
            {
              title: "Customer Growth",
              amount: "175.00",
              changePercentage: 10,
              IconComponent: TrendingUp,
            },
            {
              title: "Expenses",
              amount: "175.00",
              changePercentage: -70,
              IconComponent: TrendingDown,
            },
          ]}
          dateRange="24 Dec 2024 - 23 Jan 2025"
        />
        <StatCard
          title="Dues & Pending Orders"
          primaryIcon={<CheckCircle className="text-blue-500 w-6 h-6" />}
          details={[
            {
              title: "Dues",
              amount: "143.00",
              changePercentage: 10,
              IconComponent: TrendingUp,
            },
            {
              title: "Pending Orders",
              amount: "10",
              changePercentage: -50,
              IconComponent: TrendingDown,
            },
          ]}
          dateRange="24 Dec 2024 - 23 Jan 2025"
        />
        <StatCard
          title="Sales & Discounts"
          primaryIcon={<Tag className="text-blue-500 w-6 h-6" />}
          details={[
            {
              title: "Sales",
              amount: "1000.00",
              changePercentage: 20,
              IconComponent: TrendingUp,
            },
            {
              title: "Discounts",
              amount: "100.00",
              changePercentage: -10,
              IconComponent: TrendingDown,
            },
          ]}
          dateRange="24 Dec 2024 - 23 Jan 2025"
        />
        {/* <div className="bg-green-400 md:row-span-1 xl:row-span-2">E</div>
        <div className="bg-green-900 md:row-span-1 xl:row-span-2">F</div>
        <div className="bg-amber-800 md:row-span-1 xl:row-span-2">G</div> */}
      </div>
    </>
  );
}
