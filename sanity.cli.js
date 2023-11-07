import dotenv from 'dotenv';
import {defineCliConfig} from 'sanity/cli'

dotenv.config();
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
  },
})
