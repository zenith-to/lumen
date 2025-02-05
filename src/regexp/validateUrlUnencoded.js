// Copyright 2025 Zenith
// Licensed under the CC-BY-NC-ND-1.0 License

import regexSupplant from '../lib/regexSupplant';

// Modified version of RFC 3986 Appendix B
const validateUrlUnencoded = regexSupplant(
  '^' + // Full URL
  '(?:' +
  '([^:/?#]+):\\/\\/' + // $1 Scheme
  ')?' +
  '([^/?#]*)' + // $2 Authority
  '([^?#]*)' + // $3 Path
  '(?:' +
  '\\?([^#]*)' + // $4 Query
  ')?' +
  '(?:' +
  '#(.*)' + // $5 Fragment
    ')?$',
  'i'
);

export default validateUrlUnencoded;
