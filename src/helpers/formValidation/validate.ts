

// validateChars
const checkAllowedCharacters = (formEntry: string, regex: any) => regex.test(formEntry);
// set an error (clue's in da name)
const setError = (fieldId:string, error:string) => {
  const errorField = document.querySelector<HTMLSpanElement>(`#${fieldId}`);
  errorField!.innerText = error;
  return;
}

// * side note for following functions with validator parameter: validator has structure 
// validator = { key: (which is the field id and the db- column name),
// (object which is the value: ){k:(the validation condition name, such as maxLength or dependentOn) 
// v:(another object containing valid and errorMessage){
// valid, errorMessage }}}

// takes in the form data and the contitions object
const validateOnSubmit = (formData: { [x: string]: any; }, validator: { [s: string]: {[v: string]: any} }) => {
  // loops through the validator
  for (const [key, value] of Object.entries(validator)) {
    // extracts the corresponding formData element and loops through the validator conditions
    const formValue = formData[key];

    // if the field is not required and is empty, continue with the next formdata field
    if (!value.required && !formValue ) continue;
    for (const [k, v] of Object.entries(value)) {
      const { valid, errorMessage } = v;
      if (k === 'required' && !formValue) return {isValid: false, errorMessage: errorMessage, formField: key };
      if (k === 'allowedCharacters' && !checkAllowedCharacters(formValue, valid)) return {isValid: false, errorMessage: errorMessage, formField: key };
      if (k === 'maxLength' && formValue.length > valid) return { isValid: false, errorMessage: errorMessage, formField: key };
    }
  }
  // if a valid condition fails, return formfield and errorMessage
  return {isValid: true, errorMessage: null, formField: null}
} 


// validates on next click, if invalid fields are found, it shows the first error message for each of them and returns false
// if all fields are valid, it returns true (structurally similar to validateOnSubmit, )
const validateOnNext = (formData: { [x: string]: any }, validator: { [s: string]: { [v: string]: any } }) => {
  for (const [key, value] of Object.entries(validator)) {
    const formValue = formData[key];
    // checking for dependencies first
    if (value.dependentOn && formData[value.dependentOn.valid] && !formValue) {
      console.log('if dependency is empty is running')
      console.log('going to run error function', key)

      setError(`${key}_error`, value.dependentOn.errorMessage);
      return false;
    }
    // skipping unrequired fields that are not filled in
    if (!value.required && !formValue) continue;
    // checking for other conditions
    for (const [k, v] of Object.entries(value)) {
      const { valid, errorMessage } = v;
      // checking required 
      if (k === 'required' && !formData[key]) {
        setError(`${key}_error`, errorMessage)
        return false;
      }
      // checking allowed characters
      if (k === 'allowedCharacters' && !checkAllowedCharacters(formValue, valid)) {
        setError(`${key}_error`, errorMessage)
        return false;
      } 
      // checking max length
      if (k === 'maxLength' && formValue.length > valid) {
        setError(`${key}_error`, errorMessage);
        return false;
      }
      // checking that at least one category and one social media address has been entered
    }
  }
  return true;
}


// validates each individual field (usually on blur)
const validateField = (field: HTMLInputElement, validator: { [s: string]: { [v: string]: any } }) => {
  //for each property of the field, check if it meets the valid condition
  for (const [condition, returning] of Object.entries(validator[field.id])) {

    // if a field is required, it needs to have at least one letter
    if (condition === 'required' && returning.valid === true && field.value === '') {
      const errorSpan = document.getElementById(`${field.id}_error`);
      errorSpan!.innerText = returning.errorMessage;
      return false;
    };
    if (condition === 'allowedCharacters' && !checkAllowedCharacters(field.value, returning.valid)) {
      const errorSpan = document.getElementById(`${field.id}_error`);
      errorSpan!.innerText = returning.errorMessage;
      console.log('error for invalid chars, ', field.value, '')
      return false
    };
      // if (condition === 'maxLength' && formValue.length > valid) return {isValid: false, errorMessage: errorMessage, formField: key };
  }
  return true;
}



export { validateOnSubmit, validateField, validateOnNext };