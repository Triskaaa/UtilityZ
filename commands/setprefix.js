module.exports = {
  name: "setprefix",
  code: `$title[Préfix Défini]
  $description[Le préfixe est désormais : \`$message\`]
  $addTimestamp
  $color[YELLOW]
  $argsCheck[>1;:x: | Veuillez **indiquer le prefixe.**]
  $setServerVar[prefix;$message]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}