const REGEX = /\[(.*?)\]\((https?:\/\/\w*.*)\)/gm;

export function matchFile(text) {
  const values = [...text.matchAll(REGEX)];
  const result = values.map((value) => ({
    title: value[1],
    value: value[2],
  }));
  return result;
}
