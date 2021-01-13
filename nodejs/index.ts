import * as fs from 'fs-extra';

async function main(options: { logPrefix: string, filePath: string }) {
  const key = `${logPrefix}-read`;
  console.log(`${key}-start`)
  console.time(key);
  await fs.readFile(options.filePath);
  console.timeEnd(key);
  console.log(`${key}-end`)
}

const [, , logPrefix, filePath] = process.argv;
main({logPrefix, filePath});