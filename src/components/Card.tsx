import type { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./Ui/Buttone";

interface Iprops {
  product: IProduct;
}

function Card({ product }: Iprops) {
  const { imageURL, colors, description, price, title } = product;
  return (
    <>
      <div className="flex flex-col justify-between max-w-sm mx-auto h-full mt-10  border rounded-md p-2 md:max-w-lg">
        <Image
          src={imageURL}
          classN="object-cover w-[100%] h-[200px] rounded-lg"
          alt={title}
        />
        <h3 className="text-lg capitalize text-start mt-2">{title}</h3>
        <p className=" capitalize text-start mt-4 text-gray-400">
          {description.slice(0, 150)}...
        </p>
        {colors.length != 0 ? (
          <div className="flex justify-start gap-1 mt-4 items-center">
            {colors.map((el) => {
              return (
                <span
                  key={el}
                  className="w-6 h-6 block rounded-full text-white"
                  style={{ backgroundColor: el }}
                ></span>
              );
            })}
          </div>
        ) : null}

        <div className="flex justify-between mt-4">
          <div className="font-bold text-lg text-blue-900">${price}</div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={imageURL}
              classN="w-8 h-8 object-cover rounded-full"
              alt={"ss"}
            />
            {/* <div className="text-md capitalize font-bold">{category}</div> */}
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
