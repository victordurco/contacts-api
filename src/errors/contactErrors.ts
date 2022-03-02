
class EmailAlreadyExists extends Error {
  constructor() {
    super('Email already exists');
    this.name = 'emailAlreadyExists';
  }
}

class InvalidContact extends Error {
  constructor() {
    super('Invalid contact');
    this.name = 'invalidContact';
  }
}

export { 
  EmailAlreadyExists, 
  InvalidContact
}