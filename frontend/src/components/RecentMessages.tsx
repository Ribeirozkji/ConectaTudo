function RecentMessages() {
  const mensagens = [
    { id: 1, cliente: "Carlos", texto: "Quero fazer um pedido" },
    { id: 2, cliente: "Fernanda", texto: "Tem entrega hoje?" },
    { id: 3, cliente: "Paula", texto: "Qual o valor?" },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">
        Mensagens recentes
      </h2>

      <ul className="mt-4 space-y-3">
        {mensagens.map((mensagem) => (
          <li key={mensagem.id} className="rounded-lg border border-gray-200 p-3">
            <p className="font-medium text-gray-700">{mensagem.cliente}</p>
            <p className="mt-1 text-sm text-gray-500">{mensagem.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMessages;