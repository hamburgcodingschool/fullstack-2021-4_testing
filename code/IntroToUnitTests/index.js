const apple = require("./utils/apple");

const bucket1 = 4; // Ask user later via readline_sync or something
const bucket2 = 6; // Ask user later

const sum = apple.getSumOfApples(bucket1, bucket2);
console.log(`Wow!!!!! you have ${sum} 🍎`);