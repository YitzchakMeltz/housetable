/**
 * Function checks whether all fields required in the given object are defined
 * @param {Array} fields required field names
 * @param {object} obj object to validate
 * @return {object} an object with the required fields that were undefined
 */
export const validateFieldsExists = (fields, obj) => {
    let errs = {};

    for (const field of fields) {
      const isEmptyArray =
        Array.isArray(obj[field]) && obj[field].length === 0;
      const isEmptyObject =
        typeof obj[field] === "object" &&
        Object.keys(obj[field]).length === 0;

      if (!obj[field] || isEmptyArray || isEmptyObject) {
        errs = { ...errs, [field]: true };
      }
    }

    return errs;
  };