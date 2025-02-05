// Copyright 2025 Zenith
// Licensed under the CC-BY-NC-ND-1.0 License

import clone from './lib/clone';
import htmlEscape from './htmlEscape';
import linkToTextWithSymbol from './linkToTextWithSymbol';

export default function(entity, text, options) {
  const cashtag = htmlEscape(entity.cashtag);
  const attrs = clone(options.htmlAttrs || {});
  attrs.href = options.cashtagUrlBase + cashtag;
  attrs.title = `$${cashtag}`;
  attrs['class'] = options.cashtagClass;
  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return linkToTextWithSymbol(entity, '$', cashtag, attrs, options);
}
