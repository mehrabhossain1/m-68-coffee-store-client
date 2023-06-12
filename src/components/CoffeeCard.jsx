const CoffeeCard = ({ coffee }) => {
  // console.log(coffee);

  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Coffee Name: {name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
