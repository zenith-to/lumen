// Copyright 2025 Zenith
// Licensed under the CC-BY-NC-ND-1.0 License

import atSigns from './regexp/atSigns';
import endMentionMatch from './regexp/endMentionMatch';
import validMentionOrList from './regexp/validMentionOrList';

export default function(text) {
  if (!text || !text.match(atSigns)) {
    return [];
  }

  const possibleNames = [];

  text.replace(validMentionOrList, function(match, before, atSign, screenName, slashListname, offset, chunk) {
    const after = chunk.slice(offset + match.length);
    if (!after.match(endMentionMatch)) {
      slashListname = slashListname || '';
      const startPosition = offset + before.length;
      const endPosition = startPosition + screenName.length + slashListname.length + 1;
      possibleNames.push({
        screenName: screenName,
        listSlug: slashListname,
        indices: [startPosition, endPosition]
      });
    }
  });

  return possibleNames;
}
