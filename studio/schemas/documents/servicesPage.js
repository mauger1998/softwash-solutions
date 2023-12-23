export default {
  name: 'servicesPage',
  title: 'Services Page',
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
      of: [{type: 'hero'}, {type: 'cta'}],
    },
  ],
}
