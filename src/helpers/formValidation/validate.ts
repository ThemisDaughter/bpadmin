const validate = (formData: { [x: string]: any; }, validator: { [s: string]: {[v: string]: any} }) => {
  // validations for the different 
  // validateChars
  const checkAllowedCharacters = (formEntry: string, regex: any) => regex.test(formEntry);
  
  // loop through the validator
  for (const [key, value] of Object.entries(validator)) {
    // for each of the keys, finds the corresponding formData element and loops through the validations
    const formValue = formData[key];
    console.log('formfield: ', key, ':', formValue)
    // if the field is not required and is empty, continue with the next formdata field
    if ((!value.required && !formValue )) continue;
// btw: TODO: change validator so that in creator input, the profilename is required when the creator wants to add a socialmedia field as true
    for (const [k, v] of Object.entries(value)) {
      const { valid, errorMessage } = v;
      if (k === 'required' && v.valid === true && !formValue) return {isValid: false, errorMessage: errorMessage, formField: key };
      if (k === 'allowedCharacters' && !checkAllowedCharacters(formValue, valid)) return {isValid: false, errorMessage: errorMessage, formField: key };
      if (k === 'maxLength' && formValue.length > valid) return {isValid: false, errorMessage: errorMessage, formField: key };
      // console.log(`key: ${k}, value: ${valid}`)
    }
  }
  return {isValid: true, errorMessage: null, formField: null}
  // if a valid condition fails, return formfield and errorMessage
}


export default validate;