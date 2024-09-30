export interface Stock {
  id: number;
  name: string;
  price: number;
  symbol: string;
  quantity?: number; // quantity will be used for portfolio
}
