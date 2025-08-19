function Donate() {
  return (
    <section className="py-15 px-5 max-w-3xl  mx-auto text-center bg-[#111] rounded-2xl shadow-lg border border-gold/20 p-8 text-center">   
      <h2 className="text-3xl font-bold  mb-4">Support <span className="text-gold" >BitBridge</span></h2>
      <p className="text-gray-300 mb-6">
        Help us grow the movement. Donations keep this project community-driven and independent.
      </p>
      <button className="bg-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500">
        Donate Now
      </button>
    </section>
  );
}
export default Donate;
