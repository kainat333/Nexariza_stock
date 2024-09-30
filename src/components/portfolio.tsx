import React from "react";
import { Stock } from "../types/stock";

interface PortfolioProps {
  portfolio: Stock[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  return (
    <div className="p-4 mt-16">
      <h2 className="text-lg font-bold mb-4">Your Portfolio</h2>
      <table className="min-w-full p-7 bg-white shadow-md">
        <thead>
          <tr style={{ backgroundColor: "#6A9C89", color: "#ffffff" }}>
            <th className="py-2">Symbol</th>
            <th className="py-2">Name</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Current Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((stock) => (
            <tr key={stock.id}>
              <td className="py-2">{stock.symbol}</td>
              <td className="py-3">{stock.name}</td>
              <td className="py-3">{stock.quantity}</td>
              <td className="py-2">${(stock.quantity || 0) * stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
