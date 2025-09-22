// import { useState } from "react";

// export default function Donate() {
//   const [amount, setAmount] = useState("");
//   const [showOptions, setShowOptions] = useState(false);

//   const handleDonateNow = () => {
//     if (!amount || isNaN(amount)) {
//       alert("Please enter a valid amount");
//       return;
//     }
//     setShowOptions(true);
//   };

//   const handlePayment = async (method) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount, method }), // ✅ send amount + method
//       });

//       const data = await response.json();
//       if (data.success) {
//       alert(`Payment successful via ${method}`);
//     } else {
//       alert("Payment failed: " + data.message);
//     }
//     } catch (error) {
//       console.error(error);
//       alert("Payment failed. Try again.");
//     }
// =======
// // import { useState } from "react";

// export default function Donate() {
//   const [amount, setAmount] = useState("");
//   const [showOptions, setShowOptions] = useState(false);

//   const handleDonateNow = () => {
//     if (!amount || isNaN(amount)) {
//       alert("Please enter a valid amount");
//       return;
//     }
//     setShowOptions(true);
//   };

//   const handlePayment = async (method) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount, method }), // ✅ send amount + method
//       });

//       const data = await response.json();
//       if (data.success) {
//       alert(`Payment successful via ${method}`);
//     } else {
//       alert("Payment failed: " + data.message);
//     }
//     } catch (error) {
//       console.error(error);
//       alert("Payment failed. Try again.");
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center  text-white">
//       <div className="bg-[#111] rounded-2xl shadow-lg border border-gold/20 p-8 text-center">
//         <h2 className="text-3xl font-bold  mb-4">Support <span className="text-gold" >BitBridge</span></h2>
//       <p className="text-gray-300 mb-6">
//          Help us grow the movement. Donations keep this project community-driven and independent.
//       </p>
//         <input 
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="p-2 rounded text-black mb-4 w-full"
//         />
//         <button
//           onClick={handleDonateNow}
//           className="bg-gold text-black px-6 py-2 rounded-lg hover:bg-yellow-500"
//         >
//           Donate Now
//         </button>

//         {showOptions && (
//           <div className="mt-6 flex gap-4 justify-center">
//             <button
//               onClick={() => handlePayment("mpesa")}
//               className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
//             >
//               M-Pesa
//             </button>
//             <button
//               onClick={() => handlePayment("bitcoin")}
//               className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
//             >
//               Bitcoin
//             </button>
//             <button
//               onClick={() => handlePayment("paypal")}
//               className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               PayPal
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// src/components/DonateButton.jsx

export default function Donate() {
  const handleDonate = () => {
    // Redirect to Buy Me a Coffee (or any donation link)
    window.open("https://www.buymeacoffee.com/bitbridge", "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center  text-white">
    <div className="bg-[#111] rounded-2xl shadow-lg border border-gold/20 p-8 text-center">
          <h2 className="text-3xl font-bold  mb-4">Support <span className="text-gold" >BitBridge</span></h2>
      <p className="text-gray-300 mb-6">
         Donations keep this  Community-driven & Independent.
      </p>
          <button
      onClick={handleDonate}
      className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 hover:scale-105 transition duration-200"
      >
             Donate ☕
           </button>
    </div>
    </section>
    

  );
}
