
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
       
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
      
         
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
       
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex justify-between flex-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] h-[100px] p-2.5 rounded-[10px] -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
      <div className="font-[bold] text-sm text-[black]">
        <span className="font-[bold] text-sm text-[black]">{data.title}</span>
        <span className="text-[28px] font-light ">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="w-max text-xs border-b-[gray] border-b border-solid">{data.link}</span>
      </div>
      <div className="font-[bold] text-sm text-[rgb(160,160,160)]">
        <div className="flex items-center text-sm text-[black]">
       
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
