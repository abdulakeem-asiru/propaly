import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="hidden md:block md:w-60 flex-shrink-0 border-r border-[var(--border-color)]">
        <Sidebar />
      </aside>
      <section className="w-full h-full flex flex-col">
        <header className="bg-white h-24 border-b "><Header /></header>
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-[var(--bg-secondary)]">
          {children}
        </main>
      </section>
    </div>
  );
} 