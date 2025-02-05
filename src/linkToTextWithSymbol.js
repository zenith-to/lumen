// Copyright 2025 Zenith
// Licensed under the CC-BY-NC-ND-1.0 License

import atSigns from './regexp/atSigns';
import htmlEscape from './htmlEscape';
import linkToText from './linkToText';

export default function(entity, symbol, text, attributes, options) {
  const taggedSymbol = options.symbolTag ? `<${options.symbolTag}>${symbol}</${options.symbolTag}>` : symbol;
  text = htmlEscape(text);
  const taggedText = options.textWithSymbolTag
    ? `<${options.textWithSymbolTag}>${text}</${options.textWithSymbolTag}>`
    : text;

  if (options.usernameIncludeSymbol || !symbol.match(atSigns)) {
    return linkToText(entity, taggedSymbol + taggedText, attributes, options);
  } else {
    return taggedSymbol + linkToText(entity, taggedText, attributes, options);
  }
}
