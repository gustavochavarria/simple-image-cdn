const THUMBNAIL_URL = `https://images.weserv.nl/?url=`;

/**
 * Get URL
 *
 * @param {String} url
 * @param {Object} options
 * @param {string} [options.w] Example ` '20px' ` Sets the width of the image, in pixels.
 * @param {string} [options.h] Example ` '20px' ` Sets the height of the image, in pixels.
 * @param {number} [options.dpr] Use values between ` 1 and 8 `. The device pixel ratio is used to easily convert between CSS pixels and device pixels. This makes it possible to display images at the correct pixel density on a variety of devices such as Apple devices with Retina Displays and Android devices. You must specify either a width, a height, or both for this parameter to work.
 * @param {('inside'|'outside'|'cover'|'fill'|'contain')} [options.fit] Controls how the image is fitted to its target dimensions. Below are a couple of examples. Some of these values are based on the object-fit CSS property.
 * @param {('center'|'top'|'right'|'bottom'|'left'|'top-left'|'bottom-left'|'bottom-right'|'top-right')} [options.a] Controls the starting location of the crop. When `fit: contain` is set, it determines how the image is positioned inside its box.
 * @param {('circle'|'ellipse'|'triangle'|'triangle-180'|'pentagon-180'|'hexagon'|'square'|'heart')} [options.mask] Sets the mask type from a predefined list of shapes.
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
    return;
  }
};

/**
 *
 * @param {Object} options
 */
const getParams = (options) => {
  let params = "";

  Object.entries({ ...options }).forEach((el) => {
    params = params + `&${el[0]}=${el[1]}`;
  });

  return params || "";
};

export { getUrl as default };


