export default function Guide(id, name, description, image, review,star) {
    const guide = [
        { 
            id: 1,
            name: "Zoloo",            
            description:
                "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id felis turpis. Integer sit amet nibh non ligula vehicula pulvinar sed eget neque. Proin aliquet tincidunt lectus. In tempor, metus eu vestibulum fermentum, ipsum libero tristique sapien, eget efficitur mauris lorem nec eros. ",
            image: "/images/car.png",
            review: "47 view",
            star: "4.5",
        },
        {
            id: 2,
            name: "Zulaa",
            description:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            image: "/images/car.png",
            review: "9 view",
            star: "2.1",
        },
        {
            id: 3,
            name: "Zolboo",
            description:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            image: "/images/google.png",
            review: "10 view",
            star: "1.5",
        },
        {
            id: 4,
            name: "Uyanga",
            image: "/images/car.png",
            description:
                "float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto",
            image: "/images/car.png",
            review: "47 view",
            star: "*",
        }
    ];
    return (
        <div className=" grid grid-cols-2 gap-4  ">
          
            {guide.map((item, i) => {
                return (
                    <div className="w-[700] m-20 h-72 border-[1px]    rounded-xl  " >
                    <div className="guidePro  ">
                        <div  className="">
                            <img
                                width="200px"
                                height="300px"
                                className=" absolute border-[2px] rounded-xl mb-36 "
                                src={item.image}                              
                            />  
                            <p className="id flex">
                                {item.id}
                            </p>

                            <p  className="review absolute ml-[500px]">
                                {item.review}
                            </p>

                            <p className="star flex  absolute ml-[475px] ">
                                {item.star}
                            </p>

                            <p className="name flex absolute mt-36 ml-20"   >
                                {item.name}
                            </p>

                            <p className="description  grid grid-cols-1 gap-1   ml-56 rounded-x1 border-collapse mt-10" >
                                {item.description}
                            </p>
                        </div>
                    </div>
                    </div>
                      );})}
                      </div>
            
    );
}
