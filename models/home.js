const db=require('../utils/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
   
  }

  static fetchAll() {
  return db.execute(`
    SELECT 
      id,
      housename AS houseName,
      price,
      location,
      rating,
      photourl AS photoUrl
    FROM homes
  `);
}

  static findById(homeId, callback) {
    
  }

  static deleteById(homeId, callback) {
   
  }
};
