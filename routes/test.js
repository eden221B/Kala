const bcrypt = require("bcrypt");

const enteredPassword = "1234"; 
const storedHash = "$2b$10$ovyNy.pu/1za70VlcqMf5uLZK4ertCHo5hfCCBE0mTzEg/5xXJH3S"; // Replace with actual stored hash

bcrypt.compare(enteredPassword, storedHash, (err, result) => {
    if (err) {
        console.error("🔥 bcrypt Error:", err);
    } else {
        console.log("✅ Manual bcrypt Comparison Result:", result);
    }
});
