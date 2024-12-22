import { XMLParser } from 'fast-xml-parser';
import { BaseHouseData } from '../types/HouseData';

export function parseXMLData(xmlContent: string): BaseHouseData[] {
  const parser = new XMLParser();
  const jsonObj = parser.parse(xmlContent);
  
  // Assuming XML structure has a root element 'houses' containing 'house' elements
  const houses = jsonObj.houses.house;
  const houseArray = Array.isArray(houses) ? houses : [houses];
  
  return houseArray.map((house: any) => ({
    size: Number(house.size),
    age: house.age,
    propertyType: house.propertyType,
    windowType: house.windowType || 'double',
    wallType: house.wallType || 'cavity-post60-290-310-filled',
    floorType: house.floorType || 'concrete-75',
    heatLoss: Number(house.heatLoss)
  }));
}