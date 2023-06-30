export function useDarkMode() {
  function getHtmlElement() {
    return document.querySelector('html');
  }

  function addDarkClass() {
    const html = getHtmlElement();
    html && html.classList.add('dark');
  }

  function removeDarkClass() {
    const html = getHtmlElement();
    html && html.classList.remove('dark');
  }
  return { addDarkClass, removeDarkClass };
}
