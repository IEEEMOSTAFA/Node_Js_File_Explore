let crypto = require("crypto");

let algorithm = "aes-256-cbc";

let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);


function encrypt(text){
    let cipher = crypto.createCipheriv(algorithm,key,iv);
    let encrypted = cipher.update(text,"utf-8","hex");
    encrypted += cipher.final("hex");

    return{
        iv: iv.toString("hex"),
        encryptedData: encrypted,
    };
}

function decrypt(encryptedData,ivHex){
    let decipher = crypto.createDecipheriv(algorithm,key,Buffer.from(ivHex,"hex"));
    let decrypted = decipher.update(encryptedData,"hex","utf-8");

    decrypted += decipher.final("utf-8");
    return decrypted;

}



console.log("Encrypted Data : ");
// const sensitiveData = "My credit card: 4242 4242 4242 4242";
const sensitiveData = "Md_Al_Mostafa";
console.log("original data : ", sensitiveData);


let encrypted = encrypt(sensitiveData);
console.log("Real Encrypted data :",encrypted);



console.log("Decrypted data : ");
const decrypted = decrypt(encrypted.encryptedData,encrypted.iv);
console.log("Decrypted : ", decrypted);
console.log("match : ", sensitiveData === decrypted);