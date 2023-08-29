document.querySelectorAll("[data-obfusced-link]").forEach((element) =>
  element.addEventListener("click", function () {
        decodeAndOpenUrl(element.dataset.obfuscedLink);
  })
);
window.addEventListener('load', function() {
    document.querySelectorAll("[data-obfusced-link]").forEach((element) =>
        element.dataset.obfuscedLink = toEncode(element.getAttribute("data-obfusced-link"))
    )
});
function toEncode(string) {
    return window.btoa(unescape(encodeURIComponent(string)));
}
function toDecode(string) {
    return decodeURIComponent(escape(window.atob(string)));
}
function decodeAndOpenUrl(string) {
    window.open(toDecode(string), '_blank');
}