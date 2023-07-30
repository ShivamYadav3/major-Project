import { Link } from "react-router-dom";

const Mapping = ({ items }) => {
  return (
    <>
      {items.map((items) => {
        return (
          <Link to={`/product-details/${items.inner}`} key={items.id}>
            <div className="flex justify-center flex-col items-center text-center w-96 p-4 gap-4 border rounded-xl hover:bg-gray-100">
              {/* <p className="font-semibold">{items?.id}</p> */}

              <p className="font-semibold">{items?.title}</p>

              <img
                className="w-72 h-60 object-cover max-w-xs transition duration-100 hover:scale-105"
                src={items.image}
                alt=""
              />
              <p className="font-semibold">{items?.Price}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default Mapping;
