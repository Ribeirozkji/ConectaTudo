import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Clientes", path: "/clientes" },
    { name: "Mensagens", path: "/mensagens" },
    { name: "Pedidos", path: "/pedidos" },
  ];

  return (
    <aside className="min-h-screen w-64 bg-gray-900 text-white">
      <div className="border-b border-gray-800 px-6 py-5">
        <h2 className="text-2xl font-bold">ConectaTudo</h2>
        <p className="mt-1 text-sm text-gray-400">Painel administrativo</p>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;