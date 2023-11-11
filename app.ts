import { Command } from 'commander';
const program = new Command()

function shuffleString(str: string): string {
  const array = str.split('')
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array.join('')
}

program

  .name('PasswordGenerator')
  .description('CLI for creating passwords')
  .version('0.1.0')

program.command('generate')

  .description('Generate a random password')
  .option('-l, --length <length>', 'Length of the password', '12')
  .option('-U, --no-uppercase', 'Exclude uppercase letters')
  .option('-L, --no-lowercase', 'Exclude lowercase letters')
  .option('-N, --no-numbers', 'Exclude numbers')
  .option('-S, --no-special-chars', 'Exclude special characters')
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