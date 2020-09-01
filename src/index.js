const THUMBNAIL_URL = `https://images.weserv.nl/?url=`;

const defaultOptions = {
  w: "640px",
  h: "640px",
  fit: "cover",
};

/**
 * Get URL
 *
 * @param {String} url
 * @param {Object} options
 */
const getUrl = (url, options = {}) => {
  try {
    //prevent encode an encoded url
    const urlEncoded = window.encodeURIComponent(
      window.decodeURIComponent(url)
    );

    const params = getParams(options);

    return `${THUMBNAIL_URL}${urlEncoded}${params}`;
  } catch {
    return null;
  }
};

/**
 *
 * @param {Object} options
 */
const getParams = (options) => {
  let params = "";

  Object.entries({ ...defaultOptions, ...options }).forEach((el) => {
    params = params + `&${el[0]}=${el[1]}`;
  });

  return params;
};

export { getUrl as default };
