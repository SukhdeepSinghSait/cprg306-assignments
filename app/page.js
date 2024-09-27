import Link from 'next/link'
export default function RootPage(){
  return(
    <main>
      <section className='flex h-full flex-col items-center mt-10'>
      <h1 className="flex-1 h-4 text-4xl font-bold mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-2">Week2</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-3">Week3</Link>
      </section>
    </main>
  );
}