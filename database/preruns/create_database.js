const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path'); // Import the 'path' module

// this is a top-level async function
(async () => {
    try {
        // Use path.join to create a reliable path to the database file
        const dbPath = path.join(__dirname, '..', '..', 'database.db');

    // open the database
    const db = await open({
          filename: dbPath,
      driver: sqlite3.Database
        });
    console.log('Connected to the database.');

    // Create tables if they don't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            user_table_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL,
            discriminator TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS game (
            game_id TEXT PRIMARY KEY,
            game_name TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS player_link (
            user_id TEXT NOT NULL,
            game_id TEXT NOT NULL,
            PRIMARY KEY (user_id, game_id)
        );

        CREATE TABLE IF NOT EXISTS dm_link (
            user_id TEXT NOT NULL,
            game_id TEXT NOT NULL,
            PRIMARY KEY (user_id, game_id)
        );
    `);

    console.log('Database tables created or already exist.');

    await db.close();
        console.log('Database connection closed.');

    } catch (error) {
        // Log any errors that occur
        console.error('Error connecting to or setting up the database:', error);
    }
})();

