export default function toCapitalizeFirstLetter(input?: string) {
  if (!input) {
    return '';
  }

  let result = input.toLowerCase();

  if (result.length > 1) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  } else if (result.length === 1) {
    result = result.charAt(0).toUpperCase();
  } else {
    result = '';
  }

  return result;
}
