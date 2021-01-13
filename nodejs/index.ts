import * as fs from 'fs-extra';

async function main(options: { logPrefix: string, filePath: string }) {
  const key = `${logPrefix}-read`;
  console.log(`${key}-start`)
  console.time(key);
  for (let i = 0; i < 3; i++) {
    console.time(`${key}-${i}`);
    await fs.readFile(options.filePath);
    console.timeEnd(`${key}-${i}`);
  }
  console.timeEnd(key);
  console.log(`${key}-end`)
}

const [, , logPrefix, filePath] = process.argv;
main({logPrefix, filePath});