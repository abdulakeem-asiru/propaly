import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <aside className="w-70 bg-white border-r flex flex-col">
        <Sidebar />
      </aside>
      <section className="w-full h-full flex flex-col">
        <header className="bg-white h-24 border-b"><Header /></header>
        <main className="w-full flex-1 bg-[var(--bg-secondary)] overflow-auto">
          {children}
        </main>
      </section>
    </div>
  );
} 