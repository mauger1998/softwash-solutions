import {TbCards} from 'react-icons/tb'

export default {
  name: 'threeCard',
  title: 'Three Card',
  type: 'object',
  icon: TbCards,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'title'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Three Card: ${title}`,
      }
    },
  },
}
