import React from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Coffecard = ({ coffee }) => {
  const { _id, title, suplier, price, image, chef, details, quantity } = coffee;
    const handleView=_id=>{
        console.log(_id)
    }
    const handleEdit=_id=>{
        console.log(_id)
    }
    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:"DELETE",
                })
                .then(res=> res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
          });
    }
  return (
    <div>
      <div className="card card-side bg-base-100 border border-gray-600 shadow-xl shadow-black items-center h-64">
            <figure className=" basis-2/5">
            <img
                src={image}
                alt="Album"
                className="w-3/5"
            />
            </figure>
            <div className=" basis-2/5 text-left capitalize text-white">
                <h1 className="font-bold  text-white">Name: <span className="text-gray-400">{title}</span></h1>
                <h1 className="font-bold text-white">price: <span className="text-gray-400">{price} taka.</span> </h1>
                <h1 className="font-bold text-white">chef: <span className="text-gray-400">{chef}</span></h1>
            </div>
            <div className="icons basis-1/5 flex-col flex items-center gap-2 ">
                <button onClick={()=>handleView(_id)} className="btn btn-warning w-12 "><FaEye /></button>
                <Link to={`/update-product/${_id}`}>
                    <button onClick={()=>handleEdit(_id)} className="btn btn-warning w-12 "><MdEdit /></button>

                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-warning w-12 "><MdDelete /></button>
            </div>
        </div>
    </div>
  );
};

export default Coffecard;
