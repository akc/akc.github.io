// The math of a page, as loki writes it, \(...\) or \[...\] in a span of
// class math, typeset by KaTeX.
const macros = {
  "\\sym": "\\mathfrak{S}",
  "\\inv": "\\mathrm{inv}",
  "\\Fix": "\\mathrm{Fix}",
  "\\Pow": "\\mathfrak{P}",
};
for (const e of document.querySelectorAll("span.math")) {
  const tex = e.textContent;
  katex.render(tex.slice(2, -2), e, { displayMode: e.classList.contains("display"), macros, throwOnError: false });
}
