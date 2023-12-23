export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'title',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
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
