
const bcrypt = require('bcrypt');
bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.error(err)
      return
    }
    return hash;
  });