import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateSingleCofee = () => {
    const coffee = useLoaderData();
  const { _id, title, suplier, price, image, chef, details, quantity } = coffee;
    const handleUpdate=event=>{ 
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const suplier=form.suplier.value;
        const price=form.price.value;
        const image=form.image.value;
        const chef=form.chef.value;
        const details=form.details.value;
        const quantity=form.quantity.value;
        const updatedProduct={title,suplier,price,image,chef,details,quantity}
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
            'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                console.log(data)
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Your Bean have been added.",
                    showConfirmButton: false
                  });
            }else{
                Swal.fire({
                    position: "middle",
                    icon: "error",
                    title: "Something went wrong.",
                    showConfirmButton: false
                });
            }
        })

    }
  
  return (
    <div>
      <div className="my-12 border border-gray-500 card shrink-0 w-full shadow-2xl shadow-black bg-base-100">
        <h1 className="capitalize font-bold text-3xl text-white">
          update your product
        </h1>
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="lg:flex gap-12">
            <div className="basis-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="Product Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Suplier</span>
                </label>
                <input
                  type="text"
                  name="suplier"
                  defaultValue={suplier}
                  placeholder="Suplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="enter image url"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="basis-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef Name</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Chef Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="coffee beans in stock"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Product Details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn capitalize btn-warning">update your bean</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSingleCofee;
