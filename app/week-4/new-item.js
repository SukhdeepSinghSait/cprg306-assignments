"use client";
import { useState } from "react";
export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if(quantity<20){
            setQuantity(quantity + 1)
        }
    };
    const decrement = () => {
        if(quantity>1){
            setQuantity(quantity - 1)
        }
    }
    return(
        
        <div className="flex justify-center mt-4">
            <div className="bg-white p-2 w-36">
            <input type="text" value={quantity} className="text-black w-10 mr-4" />
            <button onClick={decrement} className={` text-white w-8 rounded mx-1 ${quantity > 1 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-slate-400'}`}>-</button>
            <button onClick={increment} className={` text-white w-8 rounded ${quantity < 20 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-slate-400'}`}>+</button>
            </div>
        </div>
        
       
    );
};