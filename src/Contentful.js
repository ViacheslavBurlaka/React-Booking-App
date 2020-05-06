import {createClient} from 'contentful';

export default createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  // environment: "" // defaults to 'master' if not set
})
