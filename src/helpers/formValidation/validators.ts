// regexes:
const regexNames = /^[a-zâôîûäöüïéèàç.\-\s]*$/i
const regexExtendedNames = /^[0-9a-zâôîûäöüïéèàç._/\-&\s]*$/i
const extendedText = /^[0-9a-z@._()âôîûäöüïéèàç\-,;.!?#$%&'’"\s]*$/i
const regexEmail = /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i
const regexNumbers = /^[0-9./+-]/

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
      errorMessage: `Was für Hieroglyphen brauchst du da? Soll das noch lesbar sein?`
    }
  }
   
}

const creatorPersonalValidator = {
  creator_first_name: {
    required: {
      valid: true,
      errorMessage: 'Bitte gib deinen Vornamen ein'
    },
    maxLength: {
      valid: 20,
      errorMessage: 'Der Vorname kann maximal 20 Zeichen enthalten'
    },
    allowedCharacters: {
      valid: regexNames,
      errorMessage: `Der Name enthält ungültige Zeichen`
    }
  },
  creator_last_name: {
    required: {
      valid: true,
      errorMessage: 'Bitte gib deinen Nachnamen ein'
    },
    maxLength: {
      valid: 20,
      errorMessage: `Der Nachname kann maximal 20 Zeichen enthalten`
    },
    allowedCharacters: {
      valid: regexNames,
      errorMessage: `Der Name enthält ungültige Zeichen`
    }
  },
  creator_address: {
    maxLength: {
      valid: 50,
      errorMessage: `Die Adresse ist zu lang!`
    },
    allowedCharacters: {
      valid: regexExtendedNames,
      errorMessage: `Die Adresse enthält ungültige Zeichen`
    }
  },
  creator_postcode: {
    maxLength: {
      valid: 10,
      errorMessage: `Die Postleitzahl hat ein ungültiges Format. Bitte überprüfe sie.`
    },
    allowedCharacters: {
      valid: regexExtendedNames,
      errorMessage: `Die Postleitzahl enthölt ungültige Zeichen`
    }
  },
  creator_city: {
    maxLength: {
      valid: 30,
      errorMessage: `Der Ortsname kann nicht mehr als 30 Zeichen enthalten`
    },
    allowedCharacters: {
      valid: regexNames,
      errorMessage: `Der Ortsname enthält ungültige Zeichen`
    }
  },
  creator_birthday: {
    // the field returns undefined
    required: {
      valid: true,
      errorMessage: `Bitte gib dein Geburtsdatum ein`
    },
    allowedCharacters: {
      valid: regexNumbers,
      errorMessage: `Bitte gib dein Geburtsdatum an`
    }
  }
}

const socialMediaValidator = {
  creator_insta_name: {
    dependentOn: {
      valid: 'creator_insta',
      errorMessage: 'Bitte gib deinen Benutzernamen/deine url ein oder klicke das Icon, um Instagram abzuwählen'
    }
  },
  creator_tiktok_name: {
    dependentOn: {
      valid: 'creator_tiktok',
      errorMessage: 'Bitte gib deinen Benutzernamen/deine url ein oder klicke das Icon, um Tiktok abzuwählen'
    }
  },
  creator_youtube_name: {
    dependentOn: {
      valid: 'creator_youtube',
      errorMessage: 'Bitte gib deinen Benutzernamen/deine url ein oder klicke das Icon, um Youtube abzuwählen'
    }
  },
  creator_linkedin_name: {
    dependentOn: {
      valid: 'creator_linkedin',
      errorMessage: 'Bitte gib deinen Benutzernamen/deine url ein oder klicke das Icon, um LinkedIn abzuwählen'
    }
  },
}

const contactValidator = {
  creator_email: {
    required: {
      valid: true,
      errorMessage: 'Bitte gib dein Email an. Wir werden hauptsächlich über E-Mail kommunizieren'
    },
    allowedCharacters: {
      valid: regexEmail,
      errorMessage: 'Bitte überprüfe deine Email-Adresse'
    }
  },
  creator_phone: {
    required: {
      valid: true,
      errorMessage: 'Bitte trag deine Handy / Telefonnummer ein'
    },
    allowedCharacters: {
      valid: regexNumbers,
      errorMessage: 'Die Telefonnummer kann Zahlen, / und + enthalten'
    }
  },
}




export { businessValidator, creatorPersonalValidator, socialMediaValidator, contactValidator }