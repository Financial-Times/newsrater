require('dotenv').config();

const alexaRankBaseUrl = process.env.ALEXA_RANK_BASE_URL;
const mongoDb = process.env.MONGODB_DB;
const mongoDbApiKey = process.env.MONGODB_API_KEY;
const mongoDbBaseUrl = process.env.MONGODB_BASE_URL;
const cfBaseUrl = process.env.CF_BASE_URL;
const cfSpaceId = process.env.CF_SPACE_ID;
const cfDeliveryApi = process.env.CF_DELIVERY_API;
const cfPreviewApi = process.env.CF_PREVIEW_API;
const cfCmaToken = process.env.CF_CMA_TOKEN;
const newsApi = process.env.NEWS_API;
const newsApiKey = process.env.NEWS_API_KEY;
const wikipediaSearch = process.env.WIKIPEDIA_SEARCH;
const calcEducation = process.env.CALC_EDUCATION;
const extremeNegative = process.env.EXTREME_NEGATIVE;
const extremePositive = process.env.EXTREME_POSITIVE;
const googleNews = process.env.GOOGLE_NEWS;
const pccBaseUrl = process.env.PCC_BASE_URL;
const ipsoBaseUrl = process.env.IPSO_BASE_URL;
const ipsoList = process.env.IPSO_LIST;
const twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY;
const twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET;
const twitterAccessToken = process.env.TWITTER_ACCESS_TOKEN;
const twitterAccessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
const googleMapsGeolocationApi = process.env.GOOGLE_MAPS_GEOLOCATION_API;
const tescoPrimaryKey = process.env.TESCO_PRIMARY_KEY;
const tescoSecondaryKey = process.env.TESCO_SECONDARY_KEY;
const ukNewspaperCirculation = process.env.UK_NEWSPAPER_CIRCULATION;
const d4TaggingUrl = process.env.D4TAGME_URL;

export {
  alexaRankBaseUrl,
  mongoDb,
  mongoDbApiKey,
  mongoDbBaseUrl,
  cfBaseUrl,
  cfSpaceId,
  cfDeliveryApi,
  cfPreviewApi,
  cfCmaToken,
  newsApi,
  newsApiKey,
  wikipediaSearch,
  calcEducation,
  extremeNegative,
  extremePositive,
  googleNews,
  pccBaseUrl,
  ipsoBaseUrl,
  ipsoList,
  twitterConsumerKey,
  twitterConsumerSecret,
  twitterAccessToken,
  twitterAccessTokenSecret,
  googleMapsGeolocationApi,
  tescoPrimaryKey,
  tescoSecondaryKey,
  ukNewspaperCirculation,
  d4TaggingUrl
};
