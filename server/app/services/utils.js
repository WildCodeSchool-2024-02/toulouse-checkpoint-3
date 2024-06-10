export default function snakeToCamel(snakeCase) {
  return snakeCase.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
}
