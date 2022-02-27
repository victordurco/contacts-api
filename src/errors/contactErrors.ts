
class InvalidContact extends Error {
  constructor() {
    super('Invalid contact');
    this.name = 'InvalidContact';
  }
}

export { 
    InvalidContact, 
}