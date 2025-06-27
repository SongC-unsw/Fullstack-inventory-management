export default function Dashboard() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
        <div className='bg-amber-300 row-span-3 xl:row-span-6'>A</div>
        <div className='bg-red-400 row-span-3 xl:row-span-6'>B</div>
        <div className='bg-blue-400 row-span-3 xl:row-span-6'>C</div>
      </div>
    </>
  );
}
