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
    const { length, uppercase, lowercase, numbers, specialChars } = options

    const charset = uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numbersCharset = numbers ? '0123456789' : '';
    const specialCharset = specialChars ? '!@#$%^&*()_+' : '';

    let password = charset + (lowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') + numbersCharset + specialCharset;
    let shuffledCharset = shuffleString(password);

    let result = '';
    for (let i = 0; i < Number(length); i++) {
      const j = Math.floor(Math.random() * shuffledCharset.length);
      result += shuffledCharset.charAt(j);
    }

    console.log('Generated Password:', result);
  })

program.parse()