import Link from 'next/link'
export default function StudentInfo(){
    return(
        <main>
            <h1 className="text-xl font-bold text-white m-2 ">Sukhdeep Singh</h1>
            <Link className="text-xl font-bold text-white m-2 bg-slate-900 p-2" href= "https://github.com/SukhdeepSinghSait">https://github.com</Link>
        </main>
    );
}