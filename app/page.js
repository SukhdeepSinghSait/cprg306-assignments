import Link from 'next/link'
export default function RootPage(){
  return(
    <main>
      <section className='flex h-full flex-col items-center mt-10'>
      <h1 className="flex-1 h-4 text-4xl font-bold mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-2">Week 2</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-3">Week 3</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-4">Week 4</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-5">Week 5</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-6">Week 6</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-7">Week 7</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-8">Week 8</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-9">Week 9</Link><br />
      <Link  className="flex-1 bg-slate-900 p-2 w-64 text-center" href= "/week-10">Week 10</Link><br />
      </section>
    </main>
  );
}