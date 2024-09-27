import React from "react";
import ItemList from "./item-list";
export default function Page(){
    
    return(
        <main>
            <h1 className="text-3xl font-bold ml-2 mt-2">Shopping List</h1>
            <ItemList />
        </main>
    );
};