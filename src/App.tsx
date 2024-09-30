import React, { useState } from "react";
import Header from "./components/header";
import MarketData from "./components/market-data";
import Portfolio from "./components/portfolio";
import Trade from "./components/trade";
import { Stock } from "./types/stock";

const App: React.FC = () => {
  const [stocks] = useState<Stock[]>([
    { id: 1, name: "Apple", price: 150, symbol: "AAPL" },
    { id: 2, name: "Google", price: 2800, symbol: "GOOGL" },
    { id: 3, name: "Microsoft", price: 299, symbol: "MSFT" },
  ]);

  const [portfolio, setPortfolio] = useState<Stock[]>([]);
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  const handleTrade = (stock: Stock) => {
    setSelectedStock(stock);
  };

  const handleBuy = (quantity: number) => {
    if (!selectedStock) return;
    const existingStock = portfolio.find((p) => p.id === selectedStock.id);
    if (existingStock) {
      existingStock.quantity = (existingStock.quantity || 0) + quantity;
      setPortfolio([...portfolio]);
    } else {
      setPortfolio([...portfolio, { ...selectedStock, quantity }]);
    }
    setSelectedStock(null);
  };

  const handleSell = (quantity: number) => {
    if (!selectedStock) return;
    const existingStock = portfolio.find((p) => p.id === selectedStock.id);
    if (
      existingStock &&
      existingStock.quantity &&
      existingStock.quantity >= quantity
    ) {
      existingStock.quantity -= quantity;
      setPortfolio([...portfolio.filter((p) => p.quantity! > 0)]);
    }
    setSelectedStock(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <MarketData stocks={stocks} onTrade={handleTrade} />
          </div>
          <div>
            <Portfolio portfolio={portfolio} />
          </div>
        </div>
        {selectedStock && (
          <div className="mt-6">
            <Trade
              stock={selectedStock}
              onBuy={handleBuy}
              onSell={handleSell}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
