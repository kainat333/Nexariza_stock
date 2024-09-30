import React, { useState } from "react";
import { Stock } from "../types/stock";

interface TradeProps {
  stock: Stock;
  onBuy: (quantity: number) => void;
  onSell: (quantity: number) => void;
}

const Trade: React.FC<TradeProps> = ({ stock, onBuy, onSell }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">
        Trade {stock.name} ({stock.symbol})
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded-lg w-52"
          min="1"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => onBuy(quantity)}
          className="bg-green-800 text-white px-4 py-2 rounded-lg"
        >
          Buy
        </button>
        <button
          onClick={() => onSell(quantity)}
          className="bg-red-800 text-white px-4 py-2 rounded-lg"
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default Trade;
