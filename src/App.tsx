import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { useState } from "react";
import Modale from "./components/Ui/Modale";
import { productList } from "./data";
import Button from "./components/Ui/Buttone";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
          {productList.map((el) => {
            return (
              <>
                <Card
                  key={el.id}
                  image={el.imageURL}
                  alt={el.category.name}
                  title={el.title}
                  des={el.description}
                  price={el.price}
                  category={el.category.name}
                ></Card>
              </>
            );
          })}
        </div>
      </main>
      <Modale isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
        <Button className="bg-blue-800 w-full" onClick={closeModal}>
          add
        </Button>
        
      </Modale>
    </>
  );
}

export default App;
