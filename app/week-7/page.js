"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }
    return(
        <main className="p-4">
            <h1 className="capitalize-first-word text-3xl font-bold ml-2 mt-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
};