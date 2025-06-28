const bcrypt = require('bcrypt');

const password = 'admin123'; // Change this to your desired admin password
const saltRounds = 10;

bcrypt.hash(password, saltRounds)
  .then(hash => {
    console.log('Generated Hash:');
    console.log(hash);
    console.log('\nMongoDB Command:');
    console.log(`db.users.insertOne({
  username: "admin",
  email: "allifyan3d@gmail.com", 
  password: "${hash}",
  createdAt: new Date(),
  updatedAt: new Date()
});`);
  })
  .catch(err => console.error('Error generating hash:', err));
