export function shortenUsername(usernameOrEmail: string) {
  let username = usernameOrEmail;
  if (usernameOrEmail.includes("@")) {
    const [rawusername, _] = usernameOrEmail.split("@");
    username = rawusername;
  }
  if (!username) return "";
  const words = username.split(/[ ._-]/);
  let res = "";
  console.log(username, words);

  if (words.length == 1) {
    res =
      words[0].length > 1
        ? words[0][0] + words[0][words[0].length - 1]
        : words[0];
  } else if (words.length == 2) {
    res = words[0].slice(0, 1) + words[1].slice(0, 1);
  } else {
    res = words[0].slice(0, 1) + words[2].slice(0, 1);
  }

  return res.toUpperCase();
}
