import { apiFetch } from "@/lib/api/client";

export default async function Home() {
  const response = await apiFetch("", {
    cache: "no-store",
  });
  const message = await response.text();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 items-center justify-center bg-white px-8 py-32 text-center dark:bg-black">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          {message}
        </h1>
      </main>
    </div>
  );
}
