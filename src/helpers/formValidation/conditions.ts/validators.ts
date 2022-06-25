// regexes:
const regexNames =  /^[0-9a-zâôîûäöüïéèàç._\-&\s]+$/i
const extendedText = /^[0-9a-z@._()âôîûäöüïéèàç\-,;.!?#$%&'’"\s]+$/i
const regexEmail = /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i


const businessValidator = {
  business_name: {
    required: {
      valid: true,
      errorMessage: 'Bitte trag den Unternehmensnamen ein'
    },
    // I want max length to be separate from invalid characters
    maxLength: {
      valid: 100,
      errorMessage: 'Der Name kann nicht mehr als 100 Zeichen enthalten'
    },
    allowedCharacters: {
      valid: regexNames,
      errorMessage: 'Der Name enthält ungültige Zeichen'
    }
  },
  business_contact: {
    maxLength: {
      valid: 100,
      errorMessage: 'Konaktangaben können nicht mehr als 100 Zeichen enthalten. Für Fragen und Anliegen, bitte persönliche Datenbankverwalterin kontaktieren.'
    },
    allowedCharacters: {
      valid: extendedText,
      errorMessage: 'enthält ungültige Zeichen'
    }
  },
  business_mail: {
    maxLength: {
      valid: 50,
      errorMessage: 'zu lang'
    },
    allowedCharacters: {
      valid: regexEmail,
      errorMessage: 'die Email ist ungültig'
    }
  },
  business_phone: {
    maxLength: {
      valid: 20,
      errorMessage: 'zu lang'
    },
    allowedCharacters: {
      valid: /^[\d\s+/]+$/,
      errorMessage: 'enthält ungültige Zeichen'
    }
  },
  business_info_private: {
    allowedCharacters: {
      valid: extendedText,
      errorMessage: `now, that's just harrassment`
    }
  }
   
}

export { businessValidator }