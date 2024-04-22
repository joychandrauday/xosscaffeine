import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffecard from '../../Components/CoffeeCard/Coffecard';

const UpdateCoffee = () => {
    const coffees=useLoaderData();
    return (
        <div className='py-12'>
            <h1 className='font-bold capitalize text-2xl'>update your products here.({coffees.length})</h1>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-4">
                    {
                        coffees.map(coffee=><Coffecard key={coffee._id} coffee={coffee}></Coffecard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;