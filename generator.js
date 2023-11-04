"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .name('PasswordGenerator')
    .description('CLI for creating passwords')
    .version('0.1.0');
program.command('generate')
    .description('Generate a random password')
    .option('-l, --length <length>', 'Length of the password', '12')
    .option('-n, --numbers', 'Include numbers')
    .option('s-, --special-chars', 'Include special characters')
    .action(function (options) {
    var length = options.length, numbers = options.numbers, specialChars = options.specialChars;
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbersCharset = '0123456789';
    var specialCharset = '!@#$%^&*()_+';
    var password = charset;
    if (numbers)
        password += numbersCharset;
    if (specialChars)
        password += specialCharset;
    var result = '';
    for (var i = 0; i < length; i++) {
        result += password.charAt(Math.floor(Math.random() * password.length));
    }
    console.log('Generated Password:', result);
});
program.parse();
