export default {
  name: 'threeCardImage',
  title: 'Three Card Image',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'customImage'}],
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
      media: 'images',
    },
    prepare: ({title, media}) => {
      return {
        title: `Three Card Image: ${title}`,
        media: media[0],
      }
    },
  },
}
