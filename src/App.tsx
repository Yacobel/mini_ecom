import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { productList } from "./data";

function App() {
  return (
    <>
      <main className="container mx-auto max-w-[90%]">
        <Header title="latest products" btnContent="build now"></Header>
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
    </>
  );
}

export default App;
