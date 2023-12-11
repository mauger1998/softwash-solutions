export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'testimonial',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.title',
      testimonials: 'testimonials',
    },
    prepare({title, testimonials}) {
      return {
        title: title,
        media: testimonials[0].image,
      }
    },
  },
}
