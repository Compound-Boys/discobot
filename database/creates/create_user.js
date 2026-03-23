const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

/**
 * Inserts a new user into the database.
 * @param {object} user - The user object to insert.
 * @param {string} user.id - The user's ID.
 * @param {string} user.username - The user's username.
 * @param {string} user.discriminator - The user's discriminator.
 */
async function insertUser(user) {
    let db; // Declare db outside the try block to access it
    try {
        const dbPath = path.join(__dirname, '..', '..', 'database.db');
        
        // Open the database
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        console.log('Connected to the database.');

        // Use a parameterized query to prevent SQL injection
        await db.run(
            'INSERT INTO users (user_id, username, discriminator) VALUES (?, ?, ?)',
            [user.id, user.username, user.discriminator]
        );

        console.log(`User ${user.username}#${user.discriminator} inserted successfully.`);

    } catch (error) {
        // Log any errors that occur
        console.error('Error inserting user:', error);
    } finally {
        // Ensure the database connection is closed, even if an error occurs
        if (db) {
            await db.close();
            console.log('Database connection closed.');
        }
    }
}

// Export the function so you can use it in other files (e.g., in your event handlers)
module.exports = { insertUser };
