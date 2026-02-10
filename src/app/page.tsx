export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-blue-600">ValidaPagoYa 🛡️</h1>
        <p className="mt-4 text-xl text-gray-600">
          Protegiendo tu negocio de estafas con transferencias falsas.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Escanea Comprobantes</h2>
          <p className="text-gray-600">Reenvía la captura a nuestro bot y la IA verificará los datos en segundos.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Banca Conectada</h2>
          <p className="text-gray-600">Integración con bancos locales para confirmar la entrada real de fondos.</p>
        </div>
      </div>
    </main>
  );
}
