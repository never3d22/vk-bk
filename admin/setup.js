/**
 * Setup script for creating admin user
 * Run: node setup.js
 */

const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, resolve);
    });
}

async function setup() {
    console.log('\n╔════════════════════════════════════════╗');
    console.log('║   🔧 Admin Setup - Вкусно и Быстро     ║');
    console.log('╚════════════════════════════════════════╝\n');
    
    // Check if users already exist
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
        if (users.length > 0) {
            console.log('⚠️  Existing users found:');
            users.forEach(u => console.log(`   - ${u.username} (${u.role})`));
            const proceed = await question('\nAdd new admin? (y/n): ');
            if (proceed.toLowerCase() !== 'y') {
                console.log('Setup cancelled.');
                rl.close();
                return;
            }
        }
    }
    
    // Get credentials
    const username = await question('Username: ');
    if (!username || username.length < 3) {
        console.log('❌ Username must be at least 3 characters');
        rl.close();
        return;
    }
    
    if (users.find(u => u.username === username)) {
        console.log('❌ Username already exists');
        rl.close();
        return;
    }
    
    const password = await question('Password (min 6 chars): ');
    if (!password || password.length < 6) {
        console.log('❌ Password must be at least 6 characters');
        rl.close();
        return;
    }
    
    const confirmPassword = await question('Confirm password: ');
    if (password !== confirmPassword) {
        console.log('❌ Passwords do not match');
        rl.close();
        return;
    }
    
    // Create user
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = {
        id: Date.now(),
        username,
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    
    console.log('\n✅ Admin user created successfully!');
    console.log(`   Username: ${username}`);
    console.log('\nRun "npm start" to start the server.');
    
    rl.close();
}

setup().catch(err => {
    console.error('Error:', err);
    rl.close();
    process.exit(1);
});
