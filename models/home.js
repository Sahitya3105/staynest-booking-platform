const db=require('../utils/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,description,id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description=description;
    this.id=id;
  }

  save() {
    if(this.id)
    {
      return db.execute('UPDATE homes SET housename=?,price=?,location=?,rating=?,photourl=?,description=? WHERE id=?',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.description,this.id]);
    }
    else{
       return db.execute('INSERT INTO homes(housename,price,location,rating,photourl,description) VALUES(?,?,?,?,?,?)',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.description]);
    }
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

  static findById(homeId) {
    return db.execute('SELECT id,housename as houseName, price,location,rating,photourl as photoUrl, description FROM homes WHERE id=?',[homeId]);
    
  }

  static deleteById(homeId) {
    return db.execute('DELETE FROM homes WHERE id=?',[homeId])
  }
};
