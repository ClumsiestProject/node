// Flags: --experimental-modules --experimental-loader ./test/fixtures/es-module-loaders/get-source.mjs
/* eslint-disable node-core/require-common-first, node-core/required-modules */
import assert from 'assert';
import { message } from '../fixtures/es-modules/message.mjs';

assert.strictEqual(message, 'WOOHOO!');
