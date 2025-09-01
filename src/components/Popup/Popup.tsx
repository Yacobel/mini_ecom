function Popup() {
  return (
    <>
      <div className="flex flex-col max-w-[500px] border-1 border-gray-600 rounded-lg ">
        <h2 className="text-2xl capitalize font-bold">add producte</h2>
        <label className="text-md text-gray-500 capitalize" htmlFor="title">
          product title
        </label>
        <input
          className="border-1 border-gray-600 rounded-lg"
          type="text"
          name="title"
          id="title"
        />
        <label className="text-md text-gray-500 capitalize" htmlFor="desc">
          product description
        </label>
        <input type="text" name="description" id="des" />
        <label className="text-md text-gray-500 capitalize" htmlFor="url">
          product image url
        </label>
        <input type="text" name="url" id="url" />
        <label className="text-md text-gray-500 capitalize" htmlFor="price">
          product price
        </label>
        <input type="text" name="price" id="price" />
        <label className="text-md text-gray-500 capitalize" htmlFor="category">
          category
        </label>
        <input type="text" name="category" id="category" />
        <button type="button">submit</button>
      </div>
    </>
  );
}

export default Popup;
