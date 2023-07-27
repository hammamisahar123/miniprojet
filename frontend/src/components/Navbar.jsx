import React from "react";

export default function Navbar() {
    const x = 'hi'
    console.log(x)
  return (
    <div className="flex items-center p-4 space-x-4">
      <h2 class="text-3xl font-bold ">Sagemcom</h2>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">services</a>
      <a href="#">contact</a>
      <button class="btnLogin-popup">Login</button>
    </div>
  );
}
