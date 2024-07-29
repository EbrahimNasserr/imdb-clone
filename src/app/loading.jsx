export default function Loader() {
  return (
    <div class="w-full flex justify-center h-screen items-center flex-col">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
      <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p class="text-zinc-600 dark:text-zinc-400">
        Your adventure is about to begin
      </p>
    </div>
  );
}
