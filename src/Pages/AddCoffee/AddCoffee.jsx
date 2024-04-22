import React from "react";
import Products from './../Products/Products';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddProduct=event=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const suplier=form.suplier.value;
        const price=form.price.value;
        const image=form.image.value;
        const chef=form.chef.value;
        const details=form.details.value;
        const quantity=form.quantity.value;
        const addedProduct={title,suplier,price,image,chef,details,quantity}
        console.log(addedProduct)
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Your product have been added.",
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
        <h1 className="capitalize font-bold text-3xl text-white">Add a new product.</h1>
        <form className="card-body" onSubmit={handleAddProduct}>
          <div className="lg:flex gap-12">
            <div className="basis-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="title"
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
                  placeholder="Product Details"
                  className="input input-bordered"
                  required
                />
              </div>
                
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add new products</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
