(function () {
  const profile = {
    username: "mirkoat21.01",
    domain: "gmail.com",
  };

  const a = document.getElementById("emailLink");
  if (!a) return;

  const email = `${profile.username}@${profile.domain}`;

  a.addEventListener("click", (e) => {
    if (a.getAttribute("href") === "#" || !a.href) e.preventDefault();
  });

  a.href = `mailto:${email}`;
  a.rel = "nofollow";
})();