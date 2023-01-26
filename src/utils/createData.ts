
import getTypeData from './getTypeData';

export function createAvailKeysList(personValue: string, availTypes: []) {

  const personIndex = availTypes.findIndex(obj => obj.name === personValue)
  console.log(personIndex)
  const personObj = availTypes.at(personIndex)
  const personKeys = Object.keys(personObj)
  return personKeys
}

export async function createTypes(typeValue: string) {
  const cat = await getTypeData(typeValue);
  return cat
}

export function createNameList(availTypes: []) {
  const namesArr = availTypes.map((info) => {
    return info.name
  })
  return namesArr
}
