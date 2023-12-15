import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({type: 'services'}),

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
