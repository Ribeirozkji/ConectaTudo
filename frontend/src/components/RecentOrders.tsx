function RecentOrders() {
  const pedidos = [
    { id: 1, cliente: "Maria", status: "Novo" },
    { id: 2, cliente: "João", status: "Em preparo" },
    { id: 3, cliente: "Ana", status: "Concluído" },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Pedidos recentes</h2>

      <ul className="mt-4 space-y-3">
        {pedidos.map((pedido) => (
          <li
            key={pedido.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
          >
            <span className="font-medium text-gray-700">{pedido.cliente}</span>
            <span className="text-sm text-gray-500">{pedido.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrders;