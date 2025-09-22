import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Ui/Buttone";
import Modale from "./components/Ui/Modale";
import Inpute from "./components/Ui/Inputs";
import { Errore } from "./components/Errore";
import { Colores } from "./components/Colores";
import Select from "./components/Ui/Select";
import type { IProduct } from "./interfaces";
import { validation } from "./validation";
import { colors, formInputsList, productList } from "./data";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(productDefaults);
  const [temp, setTemp] = useState<string[]>([]);
  const [allProducts, setAllAproducts] = useState<IProduct[]>(productList);
  const [errorse, setErrorse] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrorse({ ...errorse, [name]: "" });
  };

  function submitHandelr(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const errores = validation({
      title: product.title,
      description: product.description,
      imageURL: product.imageURL,
      price: product.price,
    });
    const haseerrors =
      Object.values(errores).some((value) => value === "") &&
      Object.values(errores).every((value) => value === "");
    if (!haseerrors) {
      setErrorse(errores);
      return;
    }
    setAllAproducts((prev) => [
      ...prev,
      { ...product, id: uuid(), colors: temp },
    ]);
    setTemp([""]);
    setProduct(productDefaults);
    closeModal();
  }
  function cancleHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    closeModal();
    setProduct(productDefaults);
  }

  const ListOfProduct = allProducts.map((el) => {
    return (
      <div key={el.id}>
        <Card product={el}></Card>
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
          type={el.type}
          name={el.name}
          id={el.id}
          placeholder={el.name}
          value={product[el.name]}
          onChange={onchangeHandler}
        ></Inpute>
        <Errore msg={errorse[el.name]}></Errore>
      </div>
    );
  });
  const color = colors.map((el) => (
    <Colores
      key={el}
      color={el}
      onClick={() => {
        if (temp.includes(el)) {
          setTemp((prev) => prev.filter((ihtem) => ihtem !== el));
          return;
        }
        setTemp((prev) => [...prev, el]);
      }}
    ></Colores>
  ));

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

            {temp.length != 0 ? (
              <div className="flex gap-1 flex-wrap ">
                {temp.map((el) => {
                  return (
                    <span
                      key={el}
                      className="px-1 rounded-md text-white"
                      style={{ backgroundColor: el }}
                    >
                      {el}
                    </span>
                  );
                })}
              </div>
            ) : null}

            <Select></Select>
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
