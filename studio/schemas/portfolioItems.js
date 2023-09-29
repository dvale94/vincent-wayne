import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioItems',
  title: 'Portfolio Items',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Instagram', value: 'instagram'}
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'imgLink',
      title: 'Image - Small (370x300)',
      type: 'image',
      options: {
        hotspot: true
      },
      hidden: ({ document }) => document?.source !== 'image' && document?.source !== 'instagram'
    }),
    defineField({
      name: 'imgLinkLg',
      title: 'Image - Large (800x800)',
      type: 'image',
      options: {
        hotspot: true
      },
      hidden: ({ document }) => document?.source !== 'image'
    }),
    defineField({
      name: 'contentId',
      title: 'Content ID from source',
      type: 'string',
      hidden: ({ document }) => document?.source !== 'youtube' && document?.source !== 'instagram'
    }),
  ]
});
