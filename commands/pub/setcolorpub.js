module.exports = {
  name: "setcolorpub",
  code: `$setServerVar[Colorpub;$message]
$title[Couleur Définie]
$description[La couleur du message de pub est désormais :

\`\`\`$message\`\`\`]
$addTimestamp
$color[YELLOW]
$onlyPerms[admin;:x: | Vous n'avez **pas la permition d'utiliser cette commande.**]
`
}