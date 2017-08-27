'use strict';

const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.fetch = (url) => {
  return fetch(url)
  .then(res => res.text())
  .then((body)=>{
    const $ = cheerio.load(body);
    const data = [];
    $(".sponsorBx").each((i, element) => {
      const result = {};
      const $element = $(element);
      const $info = $element.find('.sponsor_info');
      result.businessName = $info.find('a[itemprop="name"] *').html();
      result.businessAddr1 = $info.find('span[itemprop="streetAddress"]').text();
      result.businessAddrCity = $info.find('span[itemprop="addressLocality"]').text();
      result.businessPhoneNumber = $info.find('span[itemprop="phone"]').text();
      result.logo = $element.find('.sponsor_img img').prop('src');
      result.businessImgs = [result.logo];
      result.businessAddrProv = 'British Columbia';
      result.businessDescription = result.businessName;
      data.push(result);
    });
    return data;
  })
}
