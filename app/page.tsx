import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-3xl font-medium uppercase leading-10 tracking-snug text-black dark:text-zinc-50/90">
            Thailand Tomorrow <span className="font-bold dark:text-zinc-50">Today</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Building Tomorrow's Thailand, Today
          </p>
        </div>
      </main>
    </div>
  );
}
