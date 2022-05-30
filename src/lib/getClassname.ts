export function getClassname(
  values: readonly string[],
  prefix: string
): { [key: typeof values[number]]: string } {
  const returnObject = {};
  for (const key of values) {
    // @ts-ignore
    returnObject[key] = prefix + key;
  }
  return returnObject;
}
