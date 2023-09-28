const heroData = `
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

const aboutData = `
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

const servicesData = `
  'servicesData':
    *[_type == 'services']
      {
        'imgLink': imgLink.asset -> url,
        title,
        text
      }
`;

const portfolioData = `
  'portfolioData':
    *[_type == 'portfolioItems']
      {
        source,
        title,
        subTitle,
        'imgLink': imgLink.asset -> url,
        'imgLinkLg': imgLinkLg.asset -> url,
        videoId
  }
`;

export const sanityQueries = `
  {
    ${heroData},
    ${aboutData},
    ${servicesData},
    ${portfolioData},
  }
`;
