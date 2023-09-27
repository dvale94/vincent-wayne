const heroData = `
  'heroData': 
    *[_type == "hero"][0]
      {
        title,
        subTitle,
        designation,
        'imgLink': imgLink.asset -> url,
        'bgImgLink': bgImgLink.asset -> url,
      }
`;

export const sanityQueries = `
  {
    ${heroData}
  }
`;
