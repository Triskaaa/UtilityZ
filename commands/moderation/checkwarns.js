module.exports = {
  name: "checkwarns",
  code: `$onlyPerms[kick;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $onlyIf[$mentioned[1]!=;:x: | Veuillez **mentionner un utilisateur.**]
  $title[Warns D'Utilisateur]
  $description[**$username[$mentioned[1]]** a **$getUserVar[Warns;$mentioned[1]] warns.**]
  $addTimestamp
  $color[YELLOW]`
}