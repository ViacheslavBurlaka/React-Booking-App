import Client from "../Contentful";

/**
 * Get data from [Contentful]{@link https://www.contentful.com/developers/docs/references/} CMS
 * @returns {Promise<>}
 */
export const getData = async () => {
  try {
    return await Client.getEntries({
      content_type: 'hotelRoom',
      // order by:
      order: 'fields.price'
    });
  } catch (error) {
    console.log(error)
  }
}