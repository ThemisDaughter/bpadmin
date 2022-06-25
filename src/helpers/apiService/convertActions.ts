
export const convertToDb = ({ obj }: { obj: Object; }) => {
  const normalisedObj:{[key: string]: any} = obj;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'undefined' || value === '') {
      normalisedObj[key as keyof typeof obj] = null;
    } else {
      normalisedObj[key as keyof typeof obj] = value;
    }
  }
  return normalisedObj;
}
export const convertToTextInput = (obj: { [key: string]: any }) => {
   const normalisedObj: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'undefined' || value === null) {
      normalisedObj[key as keyof typeof obj] = '';
    } else if (typeof value === 'string') {
      normalisedObj[key] = value.replace(/\s+$/, '');
    }
  }
  return normalisedObj;
}