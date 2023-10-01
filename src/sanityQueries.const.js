const heroDataQuery = `
  'heroData': 
    *[_type == 'hero'][0]
      {
        title,
        subTitle,
        designation,
        'imgLink': imgLink.asset -> url,
        'bgImgLink': bgImgLink.asset -> url,
      }
`;

const aboutDataQuery = `
  'aboutData':
    *[_type == 'about'][0]
      {
        'imgLink': imgLink.asset -> url,
        'cvPdf': cvPdf.asset -> url,
        title,
        subtitle,
        text,
        details
      }
`;

const servicesDataQuery = `
  'servicesData':
    *[_type == 'services']
      {
        'imgLink': imgLink.asset -> url,
        title,
        text
      }
`;

const portfolioDataQuery = `
  'portfolioData':
    *[_type == 'portfolioItems']
      {
        source,
        title,
        subTitle,
        'imgLink': imgLink.asset -> url,
        'imgLinkLg': imgLinkLg.asset -> url,
        contentId
      }
`;

const reviewDataQuery = `
  'reviewData':
    *[_type == 'reviews']
      {
        'videoLink': video.asset -> url,
      }
`;

const contactDataQuery = `
  'contactData':
    *[_type == 'contact'][0]
      {
        formTitle,
        title,
        subTitle,
        text,
        email,
        phone
      }
  ,
  'socialData':
    *[_type == 'contact'][0].socialData[]
      {
        title,
        icon,
        link
      }
`;

export const sanityQueries = `
  {
    ${heroDataQuery},
    ${aboutDataQuery},
    ${servicesDataQuery},
    ${portfolioDataQuery},
    ${reviewDataQuery},
    ${contactDataQuery}
  }
`;
