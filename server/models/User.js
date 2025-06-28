
const createUser = ({ username, email, password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashed = await bcrypt.hash(password, 10);
            const sql = `INSERT INTO users (username, email, password, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())`;
            db.query(sql, [username, email, hashed], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        } catch (error) {
            reject(error);
        }
    });
};

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE email = ?`;
        db.query(sql, [email], (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
        });
    });
};

const comparePassword = (candidatePassword, hash) => {
    return bcrypt.compare(candidatePassword, hash);
};

module.exports = { createUser, findUserByEmail, comparePassword };
