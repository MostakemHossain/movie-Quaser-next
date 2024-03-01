"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavBarItems({title,param}) {
    const searchParams= useSearchParams();
    const genra=searchParams.get('genre');
  return (
    
    <div >
        <Link  className={`hover:text-amber-600 font-semibold 
        ${genra===param ?'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':''}
        `} href={`/?genre=${param}`}>
        {title}
        </Link>
    </div>
  )
}
