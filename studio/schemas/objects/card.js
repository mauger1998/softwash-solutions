export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'customImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media,
      }
    },
  },
}
