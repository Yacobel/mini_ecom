import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Ui/Buttone";
import Modale from "./components/Ui/Modale";
import Inpute from "./components/Ui/Inputs";
import { colors, formInputsList, productList } from "./data";
import { useState } from "react";
import type { IProduct } from "./interfaces";
import { validation } from "./validation";

function App() {
  const productDefaults = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(productDefaults);
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  function submitHandelr(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const errores = validation({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
    });
    console.log(errores);
    closeModal();
  }
  function cancleHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    closeModal();
    setProduct(productDefaults);

    console.log(product);
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ListOfProduct}
        </div>
        <Modale isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
          <form className="space-y-4 w-full">
            {inputs}
            <div className="flex gap-1">{color}</div>
            <div className="flex gap-3">
              <Button
                className="bg-blue-800 text-white"
                onClick={submitHandelr}
              >
                submit
              </Button>
              <Button className="bg-red-800 text-white" onClick={cancleHandler}>
                cancle
              </Button>
            </div>
          </form>
        </Modale>
      </main>
    </>
  );
}

export default App;
