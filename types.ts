export interface CountryPrice {
  country: string;
  flag: string;
  price: number;
  currency: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}