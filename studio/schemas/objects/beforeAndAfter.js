export default {
  name: 'beforeAndAfter',
  title: 'Before and After',
  type: 'object',
  fields: [
    {
      name: 'before',
      title: 'Before',
      type: 'customImage',
    },
    {
      name: 'after',
      title: 'After',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'before.alt',
      media: 'before',
    },
    prepare({title, media}) {
      return {
        title: 'Before and After',
        media: media,
      }
    },
  },
}
