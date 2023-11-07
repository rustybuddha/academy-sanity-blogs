import dotenv from 'dotenv';
import {defineCliConfig} from 'sanity/cli'

dotenv.config();
export default defineCliConfig({
  api: {
    projectId: 'e3lypy0y',
    dataset: 'production',
  },
})
