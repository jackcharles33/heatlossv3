export type PropertyAge = 'PRE_1960' | 'BETWEEN_1960_2000' | 'BETWEEN_2000_2008' | 'POST_2008';
export type PropertyType = 'Detached' | 'Semi-Detached / End-Terrace' | 'End of Terrace' | 'Terrace' | 'Bungalow';
export type InsulationType = 'none' | '50mm' | '100mm' | '200mm' | '300mm';
export type WindowType = 'single' | 'double' | 'triple';

export interface BaseHouseData {
  size: number;
  age: PropertyAge;
  propertyType?: PropertyType;
  windowType: WindowType;
  wallType: string;
  floorType: string;
  roofType: string;
  heatLoss: number;
}