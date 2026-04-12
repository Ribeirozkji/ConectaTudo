import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import SummaryCard from "../components/SummaryCard";
import QuickActions from "../components/QuickActions";
import RecentOrders from "../components/RecentOrders";
import RecentMessages from "../components/RecentMessages";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl">
          <DashboardHeader />

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryCard title="Pedidos do dia" value="12" />
            <SummaryCard title="Mensagens pendentes" value="5" />
            <SummaryCard title="Clientes cadastrados" value="28" />
            <SummaryCard title="Pedidos concluídos" value="9" />
          </section>

          <section className="mt-6">
            <QuickActions />
          </section>

          <section className="mt-6 grid gap-4 lg:grid-cols-2">
            <RecentOrders />
            <RecentMessages />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;