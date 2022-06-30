
const removeErrorMessage = (field: HTMLInputElement) => {
  const errorMessage = document.getElementById(`${field.id}_error`);
  errorMessage!.innerText = '';
}

export default removeErrorMessage;