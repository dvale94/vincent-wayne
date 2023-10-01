import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'video',
      title: 'Video (mp4)',
      type: 'file',
      options: {
        accept: 'video/mp4',
      }
    }),
  ]
});
