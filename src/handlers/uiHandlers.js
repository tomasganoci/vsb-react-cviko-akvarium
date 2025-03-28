// přepínání mezi rybičkami a akvária
export const createUiHandlers = (setActivePage) => ({
  "btn-rybicky": () => setActivePage(1),
  "btn-akvarium": () => setActivePage(2),
});
// /přepínání mezi rybičkami a akvária
