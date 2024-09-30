import React from "react";
import { Stock } from "../types/stock";

interface MarketDataProps {
  stocks: Stock[];
  onTrade: (stock: Stock) => void;
}

const MarketData: React.FC<MarketDataProps> = ({ stocks, onTrade }) => {
  return (
    <div className="p-6 mt-12">
      {" "}
      {/* Increased padding around the entire component */}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Market Data
      </h2>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
        <thead>
          <tr
            className="text-left text-sm leading-normal"
            style={{ backgroundColor: "#6A9C89", color: "#ffffff" }}
          >
            <th className="py-4 px-6 font-semibold uppercase tracking-wide">
              Symbol
            </th>
            <th className="py-4 px-6 font-semibold uppercase tracking-wide">
              Name
            </th>
            <th className="py-4 px-6 font-semibold uppercase tracking-wide">
              Price
            </th>
            <th className="py-4 px-6 font-semibold uppercase tracking-wide">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm p-2">
          {stocks.map((stock, index) => (
            <tr
              key={stock.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition duration-200 ease-in-out`}
            >
              <td className="py-4 px-6 border-b border-gray-200">
                {stock.symbol}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                {stock.name}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                ${stock.price.toFixed(2)}
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <button
                  onClick={() => onTrade(stock)}
                  style={{
                    backgroundColor: "#6A9C89",
                    color: "#ffffff",
                  }}
                  className="font-semibold px-4 py-2 rounded-md transition duration-200 hover:opacity-90 focus:outline-none focus:ring-2 hover:ring-green-950 "
                >
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketData;
