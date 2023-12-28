export default {
  name: 'beforeAndAfterSection',
  title: 'Before and After Section',
  type: 'object',
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
