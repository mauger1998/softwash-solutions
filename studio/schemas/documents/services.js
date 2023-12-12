export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Services Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'hero'}, {type: 'threeCard'}, {type: 'threeCardImage'}, {type: 'cta'}],
    },
  ],
}
