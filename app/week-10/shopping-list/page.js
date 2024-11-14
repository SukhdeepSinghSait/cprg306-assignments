"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page(){
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = async (item) => {
        try {
            const newItemId = await addItem(user.uid, item);
            if (newItemId) {
                setItems([...items, { id: newItemId, ...item }]);
            } else {
                console.error("Failed to add item: No ID returned");
            }
        } catch (error) {
            console.error("Error in handleAddItem: ", error);
        }
    };

    const handleItemSelect = (item) => {
        console.log("Item Selected:",item);
        const cleanedName = item.name.split(',')[0].trim().replace(/[^a-zA-Z ]/g, "");
        setSelectedItemName(cleanedName);
    };

    const loadItems = async () => {
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error("Error in loadItems: ", error);
        }
    };

    useEffect(() => {
        if(user){
            loadItems();
        }
    }
    , [user]);
    if(!user){
        return(
            <main className="flex flex-col items-center justify-center h-screen">
                <h1 className="h-4 text-4xl font-bold mb-8">Shopping List App</h1>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="text-2xl font-bold text-red-500">You must be logged in to view this page!</p>
                </div>
            </main>
        );
    }
    return(
        <main className="flex flex-row p-4">
            <div className="basis-1/3">
            <h1 className="capitalize-first-word text-3xl font-bold ml-2 mt-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect}/> 
            </div>
            <div className="basis-2/3 mt-1" >
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
};