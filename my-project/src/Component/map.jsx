const Mapping = ({ items }) => {
  return (
    <>
      {items.map((items) => {
        return (
          <div
            key={items.id}
            className="flex justify-center flex-col text-center w-96 p-4 gap-4 border"
          >
            <p className="font-semibold">{items?.id}</p>
            <p className="font-semibold">{items?.title}</p>

            <img className="w-72 h-60 object-cover" src={items.image} alt="" />
            <p className="font-semibold">{items?.Price}</p>
          </div>
        );
      })}
    </>
  );
};
export default Mapping;
