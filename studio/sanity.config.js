import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {deskStructure} from './components/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'softwash-solutions-studio',

  projectId: 'n6d3pe8z',
  dataset: 'production',

  plugins: [deskTool({structure: deskStructure}), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
