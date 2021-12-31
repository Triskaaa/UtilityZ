module.exports = [{
  name: "setleavechannel",
  code: `$onlyIf[$mentionedChannels[1]!=;:x: | Veuillez **indiquer le salon des messages d'aurevoir.**]
  $setServerVar[Leavechannel;$mentionedChannels[1]]
  $title[Salon Des Messages D'Aurevoir']
  $description[**Le salon des messages d'aurevoir est désormais :** <#$mentionedChannels[1]>]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  `
}, {
  name: "setleavemessage",
  code: `$argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[Leavemessage;$message]
  $title[Message D'Aurevoir']
  $description[**Le message d'aurevoir' est désormais :**
  
  \`\`\`$message\`\`\`]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "setleavecolor",
  code: `$argsCheck[>1;:x: | Veuillez **indiquer une couleur (en HEX).**]
  $setServerVar[Leavecolor;$message]
  $title[Couleur D'Aurevoir']
  $description[**La couleur de bienvenue est désormais :**
  
  \`\`\`$message\`\`\`]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}]