import { Command } from 'commander';
const program = new Command()

program

  .name('PasswordGenerator')
  .description('CLI for creating passwords')
  .version('0.1.0')

program.command('generate')

  .description('Generate a random password')
  .option('-l, --length <length>', 'Length of the password', '12')
  .option('-n, --numbers', 'Include numbers')
  .option('s-, --special-chars', 'Include special characters')
  .action((options) => {
    const { length, numbers, specialChars } = options
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersCharset = '0123456789'
    const specialCharset = '!@#$%^&*()_+'

    let password = charset
    if (numbers) password += numbersCharset
    if (specialChars) password += specialCharset

    let result = ''
    for (let i = 0; i < length; i++) {
      result += password.charAt(Math.floor(Math.random() * password.length))
    }

    console.log('Generated Password:', result)
  })

program.parse()