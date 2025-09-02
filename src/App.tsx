import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Ui/Buttone";
import { colors, formInputsList } from "./data/index";
import { useState } from "react";
import Modale from "./components/Ui/Modale";
import { productList } from "./data";
import Inpute from "./components/Ui/Inputs";
import type { IProduct } from "./interfaces";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const ListOfProduct = productList.map((el) => {
    return (
      <div className="flex" key={el.id}>
        <Card
          key={el.id}
          image={el.imageURL}
          alt={el.category.name}
          title={el.title}
          des={el.description}
          price={el.price}
          category={el.category.name}
        ></Card>
      </div>
    );
  });
  const inputs = formInputsList.map((el) => {
    return (
      <div key={el.id}>
        <label className="text-gray-500" htmlFor={el.id}>
          {el.label}
        </label>
        <Inpute
          className="p-2  border-2 w-full  border-gray-300  shadow-md rounded-md
           focus:border-blue-400 focus:outline-none focus:ring-blue-700
           text-md"
          type={el.type}
          name={el.name}
          id={el.id}
          placeholder={el.name}
          value={product[el.name]}
          onChange={onchangeHandler}
        ></Inpute>
      </div>
    );
  });
  const color = colors.map((el) => {
    return (
      <div
        key={el}
        className={`w-6 h-6 rounded-full `}
        style={{ backgroundColor: el }}
      ></div>
    );
  });

  return (
    <>
      <main className="container mx-auto max-w-[90%]">
        <Header title="latest products">
          <Button
            onClick={openModal}
            className="w-fit px-8 bg-blue-700 text-white"
          >
            add
          </Button>
        </Header>
        <div className="grid  grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {ListOfProduct}
        </div>
        <Modale isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
          <div className="space-y-4 w-full">
            {inputs}
            <div className="flex gap-1">{color}</div>
            <div className="flex gap-3">
              <Button className="bg-blue-800 text-white" onClick={closeModal }>
                submit
              </Button>
              <Button className="bg-red-800 text-white" onClick={closeModal}>
                cancle
              </Button>
            </div>
          </div>
        </Modale>
      </main>
    </>
  );
}

export default App;
