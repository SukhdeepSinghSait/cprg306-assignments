"use client";
import Item from "./item";
import itemJson from "./items.json";
import { useState } from "react";
export default function ItemList(){
    let items = [...itemJson];
    const [sortBy, setSortBy] = useState("name");
    items.sort((a, b) => {
      if(sortBy === "name"){
        return a.name.localeCompare(b.name);
      }
      else if(sortBy === "category" || sortBy === "groupedCategory"){
        return a.category.localeCompare(b.category);
      }});
    const handleNameSort = () => {
        setSortBy("name");
    }
    const handleCategorySort = () => {
        setSortBy("category");
    }
    const handleGroupedCategorySort = () => {
        setSortBy("groupedCategory");
    }
    const groupItemsByCategory = (items) => {
      return items.reduce((acc, item) => {
          if (!acc[item.category]) {
              acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
      }, {});
    };
      return(
        <main className="p-4">
            <h1 className="text-3xl font-bold ml-2 mt-2">Shopping List</h1>
            <section className="flex justify-between items-center mt-4 w-max">
                <h1 className="text-xl ml-2 mt-2 m-2">Sort by:</h1> 
                <button onClick={handleNameSort} className={` text-white w-28 h-10 rounded-md m-2 ${sortBy === "name" ? "bg-orange-500 font-bold" : "bg-orange-700"}`}>Name</button>
                <button onClick={handleCategorySort} className={`text-white w-28 h-10 rounded-md m-2 ${sortBy === "category" ? "bg-orange-500 font-bold" : "bg-orange-700"}`}>Category</button>
                <button onClick={handleGroupedCategorySort} className={`text-white w-28 h-16 rounded-md m-2 ${sortBy === "groupedCategory" ? "bg-orange-500 font-bold" : "bg-orange-700"}`}>Grouped Category</button>
            </section>
            <section className="mt-4">
                {sortBy === "groupedCategory" ? (
                    Object.keys(groupItemsByCategory(items)).map((category) => (
                        <div key={category}>
                            <h2 className="text-2xl font-bold mt-4 capitalize">{category}</h2>
                            {groupItemsByCategory(items)[category].map((item, index) => (
                                <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
                            ))}
                        </div>
                    ))
                ) : (
                    items.map((item, index) => (
                        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
                    ))
                )}
            </section>
        </ main>
      );
};
