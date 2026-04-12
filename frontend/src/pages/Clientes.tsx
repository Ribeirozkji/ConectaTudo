import Sidebar from "../components/Sidebar";

function Clientes() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">Clientes</h1>
          <p className="mt-2 text-gray-600">
            Área para visualizar e cadastrar clientes.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Clientes;