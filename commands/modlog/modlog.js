module.exports = [{
  name: "modlog on",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition de faire ceci.**]
  $setServerVar[Modlog;on]
  $title[Modlog Activé]
  $description[Le modlog est désormais activé.]
  $addTimestamp$color[YELLOW]`
}, {
  name: "modlog off",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition de faire ceci.**]
  $setServerVar[Modlog;off]
  $title[Modlog Désactivé]
  $description[Le modlog est désormais désactivé.]
  $addTimestamp$color[YELLOW]`
}]