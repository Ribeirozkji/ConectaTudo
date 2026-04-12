import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Ações rápidas</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          to="/pedidos"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Ver pedidos
        </Link>

        <Link
          to="/mensagens"
          className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
        >
          Ver mensagens
        </Link>

        <Link
          to="/clientes"
          className="rounded-lg bg-gray-800 px-4 py-2 text-white transition hover:bg-gray-900"
        >
          Ver clientes
        </Link>
      </div>
    </div>
  );
}

export default QuickActions;