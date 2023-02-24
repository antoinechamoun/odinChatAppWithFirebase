export function capitalize(name: string): string {
  let result = name.split(" ");
  result = result.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });

  return result.join(" ").trim();
}
