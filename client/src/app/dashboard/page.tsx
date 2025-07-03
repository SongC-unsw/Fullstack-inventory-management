import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";

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
        <div className="bg-black row-span-3">D</div>
        <div className="bg-green-400 md:row-span-1 xl:row-span-2">E</div>
        <div className="bg-green-900 md:row-span-1 xl:row-span-2">F</div>
        <div className="bg-amber-800 md:row-span-1 xl:row-span-2">G</div>
      </div>
    </>
  );
}
