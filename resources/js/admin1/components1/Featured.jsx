
const Featured = () => {
  return (
    <div className="flex-[2] shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] p-2.5 -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
      <div className="flex items-center justify-between text-[gray] ">
        <h1 className="text-base font-medium">Total Revenue</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-[15px] p-5">
        <div className="w-[100px] h-[100px]">
          
        </div>
        <p className="font-medium text-[gray]">Total sales made today</p>
        <p className="text-3xl">$420</p>
        <p className="font-light text-xs text-[gray] text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary w-full flex items-center justify-between">
          <div className="item text-center">
            <div className="itemTitle text-sm text-[gray]">Target</div>
            <div className="itemResult negative text-[red]">
             
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-[gray]">Last Week</div>
            <div className="itemResult positive text-[green]">
             
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-[gray]">Last Month</div>
            <div className="itemResult text-[green]">
              
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;