export default function ContributorsLoading() {
  return (
    <section className="container-page py-16 sm:py-20 lg:py-24">
      <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
      <div className="mt-6 h-12 w-64 animate-pulse rounded-2xl bg-slate-200" />
      <div className="mt-4 h-6 w-[28rem] max-w-full animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-56 animate-pulse rounded-3xl bg-white ring-1 ring-slate-200"
          />
        ))}
      </div>
    </section>
  );
}
