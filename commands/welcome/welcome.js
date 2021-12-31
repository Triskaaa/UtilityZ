module.exports = [{
  name: "setwelcomechannel",
  code: `$onlyIf[$mentionedChannels[1]!=;:x: | Veuillez **indiquer le salon des messages de bienvenue.**]
  $setServerVar[Welcomechannel;$mentionedChannels[1]]
  $title[Salon Des Messages De Bienvenue]
  $description[**Le salon des messages de bienvenue est désormais :** <#$mentionedChannels[1]>]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  `
}, {
  name: "setwelcomemessage",
  code: `$argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[Welcomemessage;$message]
  $title[Message De Bienvenue]
  $description[**Le message de bienvenue est désormais :**
  
  \`\`\`$message\`\`\`]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "setwelcomecolor",
  code: `$argsCheck[>1;:x: | Veuillez **indiquer une couleur (en HEX).**]
  $setServerVar[Welcomecolor;$message]
  $title[Couleur De Bienvenue]
  $description[**La couleur de bienvenue est désormais :**
  
  \`\`\`$message\`\`\`]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}]