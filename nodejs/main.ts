import cp from 'child_process';
import * as Path from 'path';

async function main(options: {
  inputFilePath: string,
  simultaneousReaders: number
}) {

  const children = Array.from({length: options.simultaneousReaders})
    .map((_, i) => {
      const prefix = `${Path.basename(options.inputFilePath)}-${i}`;
      const child = cp.fork(
        Path.join(__dirname, 'index'),
        {
          execArgv: [
            'index',
            prefix,
            inputFilePath
          ]
        }
      );
      return child;
    });
}

const [, , inputFilePath, simultaneousReaders] = process.argv;
main({
  inputFilePath,
  simultaneousReaders: parseInt(simultaneousReaders, 10)
});