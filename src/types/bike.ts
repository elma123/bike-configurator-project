export interface Bike {
  id: number;
  name: string;
  model: 'city' | 'cargo' | 'sporty';
  frame: 'high' | 'low' | 'mid';
  paintwork: 'red' | 'blue' | 'green';
  price: number;
}
