import Sidebar from "../components/Sidebar";

function Pedidos() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">Pedidos</h1>
          <p className="mt-2 text-gray-600">
            Área para visualizar e gerenciar pedidos.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Pedidos;