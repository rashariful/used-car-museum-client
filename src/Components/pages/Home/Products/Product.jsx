import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

const Product = ({ product, setMproudcts }) => {

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  console.log(users.sellerStatus);

  const {
    img,
    title,
    description,
    resalePrice,
    originalPrice,
    brand,
    location,
    time,
    useYear,
    varifySeller,
    sellerName,
  } = product;



  return (
    <div>
      <div className="card w-96 bg-base-100 drop-shadow-md">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a
                href="#"
                class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
              >
                {title}
              </a>
              <span class="text-gray-500">{brand}</span>
              <span class="text-gray-500">{location}</span>
              <span class="text-gray-500">{useYear}</span>
              <span class="text-gray-500">
                Date:{time.slice(0, 10)} <br /> Time: {time.slice(11, 20)}
              </span>
            </div>

            <div class="flex flex-col items-end">
              <div class="flex gap-2 items-end">
                <small>{sellerName}</small>
                {users.map((user, i) => {return (
                
                 
                    user?.sellerStatus !== "verifySeller" ? (
                    <FaCheckCircle className="text-success"></FaCheckCircle>) :
                    (
                    <FaRegTimesCircle className="text-red-600"></FaRegTimesCircle>
                    )
                 
                ); } )}
              </div>

              <span class="text-gray-600 lg:text-lg font-bold">
                ${resalePrice}
              </span>
              <span class="text-red-500 text-sm line-through">
                ${originalPrice}
              </span>
            </div>
          </div>
          <p>{description.slice(0, 50)}</p>

          <div className="card-actions justify-end">
            <label
              onClick={() => setMproudcts(product)}
              htmlFor="my-modal-3"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;