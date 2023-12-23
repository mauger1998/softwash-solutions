import {MdOutlineTexture} from 'react-icons/md'

export default {
  name: 'basic',
  title: 'Basic',
  type: 'object',
  icon: MdOutlineTexture,
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}
