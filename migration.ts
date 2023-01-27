// contents of migration.ts
import { exec } from 'child_process';

const command = `npm run typeorm -- migration:generate ./src/migrations/${process.argv[2]} -d ./ormconfig.ts`;

(() =>
  exec(command, (error, stdout, stderr) => {
    if (error !== null) {
      console.error(stderr);
    }
    console.log(stdout);
  }))();
