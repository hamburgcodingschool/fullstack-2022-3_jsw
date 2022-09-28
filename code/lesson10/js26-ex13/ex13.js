const text = "Hello World in a Frame!";

const words = text.split(" ");

let maxLength = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
        maxLength = words[i].length;
    }
}

console.log("*".repeat(maxLength + 4));
for (let i = 0; i < words.length; i++) {
    const currentLength = words[i].length;
    const rPad = " ".repeat(maxLength - currentLength);
    
    console.log("* " + words[i] + rPad + " *");
}
console.log("*".repeat(maxLength + 4));