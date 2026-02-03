(function () {
  const profile = {
    username: "mirkoat21.01",
    domain: "gmail.com",
  };

  const a = document.getElementById("emailLink");
  if (!a) return;

  const email = `${profile.username}@${profile.domain}`;
  const mailto = `mailto:${email}`;

  a.setAttribute("href", mailto);
  a.rel = "nofollow";

  a.addEventListener("click", () => {
    a.setAttribute("href", mailto);
  });
})();