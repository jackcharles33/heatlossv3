import { HouseData } from '../types/HouseData';
import { wallTypes, floorTypes, insulationTypes } from '../constants';
import { getWindowUValue } from './normalization';

export function calculateUValueFactor(input: Partial<HouseData>): number {
  const wallUValue = wallTypes[input.wallType as keyof typeof wallTypes]?.uValue || 0.5;
  const floorUValue = floorTypes[input.floorType as keyof typeof floorTypes]?.uValue || 0.5;
  const windowUValue = getWindowUValue(input.windowType || 'double');
  const insulationUValue = insulationTypes[input.insulationType as keyof typeof insulationTypes]?.uValue || 0.5;
  
  return (wallUValue + floorUValue + windowUValue + insulationUValue) / 4;
}