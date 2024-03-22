import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(join(import.meta.url,"../"));
const __dirname__ = dirname(__filename);

export default __dirname__;