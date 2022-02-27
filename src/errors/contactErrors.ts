
class emailAlreadyExists extends Error {
  constructor() {
    super('Email already exists');
    this.name = 'emailAlreadyExists';
  }
}

export { 
  emailAlreadyExists, 
}