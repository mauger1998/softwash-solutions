export default {
  name: 'project',
  title: 'Project',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'name',
      title: 'Name',
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
      title: 'name',
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
