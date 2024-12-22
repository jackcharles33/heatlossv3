import { BaseHouseData, CSVHouseData, PropertyAge } from '../types/HouseData';

export function parseCSVData(csvData: CSVHouseData[]): BaseHouseData[] {
  return csvData.map(data => convertToHouseData(data));
}

function convertToHouseData(csvData: CSVHouseData): BaseHouseData {
  // Map age to window types based on age
  const ageToWindows: Record<PropertyAge, 'single' | 'double' | 'triple'> = {
    'PRE_1960': 'single',
    'BETWEEN_1960_2000': 'double',
    'BETWEEN_2000_2008': 'double',
    'POST_2008': 'double'
  };

  return {
    size: csvData['Floor Area'],
    age: csvData['Property Age'],
    propertyType: csvData['Property Type'],
    windowType: ageToWindows[csvData['Property Age']],
    wallType: 'cavity-post60-290-310-filled',
    floorType: 'concrete-75',
    heatLoss: csvData['Heatloss'] / 1000 // Convert to kW
  };
}