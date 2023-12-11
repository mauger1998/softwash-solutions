export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'customImage',
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],
  preview: {
    select: {
      title: 'title.title',
      media: 'images',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media[0],
      }
    },
  },
}
