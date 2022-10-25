// import crypto from 'crypto-browserify';
// import { v4 as uuidv4 } from 'uuid';

const { v4: uuidv4 } = require('uuid');

export const UUID = uuidv4();

// генерируем какой-то идентификатор для запуска
// export const UUID = crypto.randomUUID();
