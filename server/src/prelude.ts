import { config } from 'dotenv';
import path from 'path';
import { existsSync } from 'fs';
import chalk from 'chalk';
import { isEmpty } from 'lodash';

const envPathName = path.join(process.cwd(), '.env');

// Define here every variable needed in your .env
// so that you never forget it 👀
const neededValues = ['PORT'];

if (existsSync(envPathName)) {
	config();

	const missingValues = neededValues.filter(
		(v: string): boolean => !process.env[v],
	);

	if (!isEmpty(missingValues)) {
		console.log(
			chalk.red.bold(
				`Sorry [${missingValues.join(
					'/',
				)}] value(s) are missing on your .env file`,
			),
		);
		process.exit(42);
	}
} else {
	console.log(chalk.red.bold('Sorry an .env file is missing'));
	process.exit(42);
}
