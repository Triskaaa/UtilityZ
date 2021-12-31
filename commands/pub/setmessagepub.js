module.exports = {
  name: "setmessagepub",
  code: `$setServerVar[Messagepub;$message]
  $title[Message de pub défini]
  $description[Le message de pub est désormais :
    
    \`\`\`$message\`\`\`
  ]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}