import Image from "../Image/Image";
import Button from "../Ui/Buttone";

interface Iprops {
  image: string;
  alt: string;
  title: string;
  des: string;
  price: string;
  category: string;
}

function Card({ image, title, des, price, category, alt }: Iprops) {
  return (
    <>
      <div className="flex flex-col justify-between max-w-sm mx-auto mt-10 border rounded-md p-2 md:max-w-lg">
        <Image
          src={image}
          classN="object-cover w-[100%] h-[200px] rounded-lg"
          alt={alt}
        />
        <h3 className="text-lg capitalize text-start mt-2">{title}</h3>
        <p className=" capitalize text-start mt-4 text-gray-400">
          {`${des.slice(0, 150)}...`}
        </p>
        <div className="flex justify-start gap-2 mt-4 items-center">
          <div className="w-5 h-5 rounded-full bg-amber-400"></div>
          <div className="w-5 h-5 rounded-full bg-amber-500"></div>
          <div className="w-5 h-5 rounded-full bg-amber-600"></div>
          <div className="w-5 h-5 rounded-full bg-amber-700"></div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-lg text-blue-900">${price}</div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={image}
              classN="w-8 h-8 object-cover rounded-full"
              alt={alt}
            />
            <div className="text-md capitalize font-bold">{category}</div>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center mt-5">
          <Button
            className=" bg-blue-800 text-white"
            onClick={() => {
              console.log("clicked");
            }}
          >
            edit
          </Button>
          <Button className=" bg-red-800 text-white">destroy</Button>
        </div>
      </div>
    </>
  );
}
export default Card;
