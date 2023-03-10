
export const capitalize = (string: string) => {
  if (!string) return string;
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return string[0]?.toUpperCase() + string.substring(1);
};

export const checkIsCharLetter = (char: string) => {
  return /[a-zA-Z]/.test(char);
};

export const summarize = (
  html: string
): { summary: string | undefined; hasMore: boolean } => {
  const document = new DOMParser().parseFromString(html, "text/html");

  const allowedTags = ["p", "ul", "ol", "h3", "pre", "img"];

  let firstElement;

  for (const tag of allowedTags) {
    firstElement = document.body.querySelector(tag);
    if (firstElement) {
      break;
    }
  }

  if (firstElement) {
    if (
      firstElement.textContent &&
      firstElement.textContent.length < 20 &&
      firstElement.nextElementSibling
    ) {
      return {
        summary:
          firstElement.outerHTML + firstElement.nextElementSibling.outerHTML,
        hasMore: document.body.children.length > 2,
      };
    } else {
      return {
        summary: firstElement.outerHTML,
        hasMore: document.body.children.length > 1,
      };
    }
  } else {
    return { summary: "<p>Summary couldn't be generated</p>", hasMore: false };
  }
};
