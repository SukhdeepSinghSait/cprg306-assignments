export default function Item({name, quantity, category}){
    return(
        <ul className="m-4 bg-slate-900 p-2 max-w-sm ">
        <li className="text-xl font-bold text-white">{name}</li>
        <li>Buy {quantity} in {category}</li>
        </ ul>
    );
};