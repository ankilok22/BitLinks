import Image from "next/image";
import LocalFont from "next/font/local";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={'text-3xl font-bold ${poppins.className}'}>
            The best URL shortner in the market
          </p>
          <p className="px-50 text-center">
            We are most straightforward URL shortner 
          </p>
          <div className="flex gap-3 justify-start">
          <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="https://github.com/ankilok22/BitLinks"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>GitHub</button></Link>
</div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="image" src={"/images/slider.jpeg"} fill={true} />

        </div>
      </section>
    </main>
  );
}
