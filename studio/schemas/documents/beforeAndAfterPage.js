export default {
  name: 'beforeAndAfterPage',
  title: 'Before and After Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'beforeAndAfter',
      title: 'Before and After',
      type: 'array',
      of: [
        {
          name: 'beforeAndAfter',
          title: 'Before and After',
          type: 'beforeAndAfter',
        },
      ],
    },
  ],
}
