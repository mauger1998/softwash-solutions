export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'ourWork'},
        {type: 'testimonials'},
        {type: 'cta'},
        {type: 'threeCards'},
        {type: 'basic'},
      ],
    },
  ],
}
