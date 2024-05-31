import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-slate-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MiLogo</Link>
        </div>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded"
          >
            Inicio
          </Link>
          <Link
            href="/newproduct"
            className="text-white hover:bg-slate-600 px-3 py-2 rounded"
          >
            Crear Producto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
