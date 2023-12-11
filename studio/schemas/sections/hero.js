export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'title',
    },
  ],
  preview: {
    select: {
      title: 'title.title',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media,
      }
    },
  },
}
