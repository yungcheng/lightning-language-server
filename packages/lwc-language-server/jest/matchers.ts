import { isAbsolute } from 'path';
import * as fs from 'fs';

expect.extend({
    fileToExist(path) {
        const pass = fs.existsSync(path);
        if (pass) {
            return {
                message: () =>
                    `expected ${path} not to exist`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${path} to exist`,
                pass: false,
            };
        }
    },
    pathToBeAbsolute(path) {
        const pass = isAbsolute(path);
        if (pass) {
            return {
                message: () =>
                    `expected ${path} not to be absolute`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${path} to be absolute`,
                pass: false,
            };
        }
    },
    toEndWith(str, suffix) {
        const pass = str.endsWith(suffix);
        if (pass) {
            return {
                message: () =>
                    `expected ${str} not to end with ${suffix}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${str} to end with ${suffix}`,
                pass: false,
            };
        }
    },
});
