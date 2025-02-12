const itemSelected = (destination: VacationDestination): void => {
  destination.selected = !destination.selected;
};

// Define the structure of a vacation destination
export interface VacationDestination {
  id: number;
  location: string;
  price: number; // Changed to a numeric value for actual prices
  average_yearly_temperature: string;
  selected: boolean;
}

// Define the array with explicit typing and actual prices in USD
const vacationDestinations: VacationDestination[] = [
  {
    id: 1,
    location: "Paris",
    price: 2500,
    average_yearly_temperature: "15°C",
    selected: true,
  },
  {
    id: 2,
    location: "Tokyo",
    price: 1800,
    average_yearly_temperature: "16°C",
    selected: true,
  },
  {
    id: 3,
    location: "New York City",
    price: 2200,
    average_yearly_temperature: "13°C",
    selected: true,
  },
  {
    id: 4,
    location: "Sydney",
    price: 2700,
    average_yearly_temperature: "20°C",
    selected: true,
  },
  {
    id: 5,
    location: "Cape Town",
    price: 1600,
    average_yearly_temperature: "18°C",
    selected: true,
  },
  {
    id: 6,
    location: "Rio de Janeiro",
    price: 1900,
    average_yearly_temperature: "24°C",
    selected: true,
  },
  {
    id: 7,
    location: "Barcelona",
    price: 2000,
    average_yearly_temperature: "17°C",
    selected: true,
  },
  {
    id: 8,
    location: "Dubai",
    price: 3000,
    average_yearly_temperature: "27°C",
    selected: true,
  },
  {
    id: 9,
    location: "Bali",
    price: 1500,
    average_yearly_temperature: "28°C",
    selected: true,
  },
  {
    id: 10,
    location: "Rome",
    price: 2100,
    average_yearly_temperature: "18°C",
    selected: true,
  },
];

export { vacationDestinations, itemSelected };
