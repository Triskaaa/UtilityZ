module.exports = [{
  name: "editcommand",
  code: `$reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣,3️⃣;cmd1,cmd2,cmd3;yes]
$textSplit[$sendMessage[{title: Modification Des Commandes Personalisées}{description:Réagissez avec les réactions pour modifier une commande :

:one: - \`$getServerVar[prefix]$getServerVar[trigger1]\`
:two: - \`$getServerVar[prefix]$getServerVar[trigger2]\`
:three: - \`$getServerVar[prefix]$getServerVar[trigger3]\`
}{color:YELLOW}{footer:Demandé par $username};yes]; ]
$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  type: 'awaitedCommand',
  name: "cmd1",
  code: `$setServerVar[step;cmd1trigger]
  $setServerVar[stepchannel;$channelID]
  $title[Modification De La Commande : Partie 1]
  $description[__Quel sera le trigger de cette commande ?__]
  $footer[Indiquez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  `
}, {
  name: "$alwaysExecute",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[step;cmd1type]
  $setServerVar[trigger1;$message]
  $onlyForChannels[$getServerVar[stepchannel];]
  $reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣;msg1,role1;yes]
 $textSplit[$sendMessage[{title: Modification De La Commande : Partie 2}{description:__Quel sera le type de la commande ?__
  
  :one: - Envoie un message.
  :two: - Attribues un rôle.}{color:YELLOW};yes]; ]
  $onlyIf[$getServerVar[step]==cmd1trigger;]
  `
}, {
  type: 'awaitedCommand',
  name: "msg1",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[type1;message]
  $setServerVar[step;cmd1message]
  $onlyIf[$getServerVar[step]==cmd1type;]
  $title[Modification De La Commande : Partie 3]
  $description[__Quel sera le message de cette commande ?__]
  $footer[Indiquez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  type: 'awaitedCommand',
  name: "role1",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[type1;role]
  $setServerVar[step;cmd1role]
  $onlyIf[$getServerVar[step]==cmd1type;]
  $title[Modification De La Commande : Partie 3]
  $description[__Quel sera le role de cette commande ?__]
  $footer[Mentionnez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "$alwaysExecute",
  code: `$setServerVar[role1;$mentionedRoles[1]]
  $setServerVar[step;]
  $setServerVar[stepchannel;]
  $onlyIf[$getServerVar[step]==cmd1role;]
  $onlyForChannels[$getServerVar[stepchannel];]
  $title[Modification De La Commande : Terminée]
  $description[__Le trigger de la commande 1 est désormais :__ \`$getServerVar[prefix]$getServerVar[trigger1]\`
  
  __Le rôle de la commande 1 est désormais :__
  
  \`\`\`$roleName[$mentionedRoles[1]]\`\`\`]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username.]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$setServerVar[message1;$message]
  $setServerVar[step;]
  $setServerVar[stepchannel;]
  $onlyIf[$getServerVar[step]==cmd1message;]
  $onlyForChannels[$getServerVar[stepchannel];]
  $title[Modification De La Commande : Terminée]
  $description[__Le trigger de la commande 1 est désormais :__ \`$getServerVar[prefix]$getServerVar[trigger1]\`
  
  __Le message de la commande 1 est désormais :__
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username.]
  $suppressErrors`  // commande 2
}, {
  type: 'awaitedCommand',
  name: "cmd2",
  code: `$setServerVar[step;cmd2trigger]
  $setServerVar[stepchannel;$channelID]
  $title[Modification De La Commande : Partie 1]
  $description[__Quel sera le trigger de cette commande ?__]
  $footer[Indiquez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  `
}, {
  name: "$alwaysExecute",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[step;cmd2type]
  $setServerVar[trigger2;$message]
  $onlyForChannels[$getServerVar[stepchannel];]
  $reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣;msg2,role2;yes]
 $textSplit[$sendMessage[{title: Modification De La Commande : Partie 2}{description:__Quel sera le type de la commande ?__
  
  :one: - Envoie un message.
  :two: - Attribues un rôle.}{color:YELLOW};yes]; ]
  $onlyIf[$getServerVar[step]==cmd2trigger;]
  `
}, {
  type: 'awaitedCommand',
  name: "msg2",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[type2;message]
  $setServerVar[step;cmd2message]
  $onlyIf[$getServerVar[step]==cmd2type;]
  $title[Modification De La Commande : Partie 3]
  $description[__Quel sera le message de cette commande ?__]
  $footer[Indiquez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  type: 'awaitedCommand',
  name: "role2",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[type2;role]
  $setServerVar[step;cmd2role]
  $onlyIf[$getServerVar[step]==cmd2type;]
  $title[Modification De La Commande : Partie 3]
  $description[__Quel sera le role de cette commande ?__]
  $footer[Mentionnez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "$alwaysExecute",
  code: `$setServerVar[role2;$mentionedRoles[1]]
  $setServerVar[step;]
  $setServerVar[stepchannel;]
  $onlyIf[$getServerVar[step]==cmd2role;]
  $onlyForChannels[$getServerVar[stepchannel];]
  $title[Modification De La Commande : Terminée]
  $description[__Le trigger de la commande 2 est désormais :__ \`$getServerVar[prefix]$getServerVar[trigger2]\`
  
  __Le rôle de la commande 2 est désormais :__
  
  \`\`\`$roleName[$mentionedRoles[1]]\`\`\`]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username.]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$setServerVar[message2;$message]
  $setServerVar[step;]
  $setServerVar[stepchannel;]
  $onlyIf[$getServerVar[step]==cmd2message;]
  $onlyForChannels[$getServerVar[stepchannel];]
  $title[Modification De La Commande : Terminée]
  $description[__Le trigger de la commande 2 est désormais :__ \`$getServerVar[prefix]$getServerVar[trigger2]\`
  
  __Le message de la commande 2 est désormais :__
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username.]
  $suppressErrors` // Commande 3 
}, {
  type: 'awaitedCommand',
  name: "cmd3",
  code: `$setServerVar[step;cmd3trigger]
  $setServerVar[stepchannel;$channelID]
  $title[Modification De La Commande : Partie 1]
  $description[__Quel sera le trigger de cette commande ?__]
  $footer[Indiquez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  `
}, {
  name: "$alwaysExecute",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[step;cmd3type]
  $setServerVar[trigger3;$message]
  $onlyForChannels[$getServerVar[stepchannel];]
  $reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣;msg3,role3;yes]
 $textSplit[$sendMessage[{title: Modification De La Commande : Partie 2}{description:__Quel sera le type de la commande ?__
  
  :one: - Envoie un message.
  :two: - Attribues un rôle.}{color:YELLOW};yes]; ]
  $onlyIf[$getServerVar[step]==cmd3trigger;]
  `
}, {
  type: 'awaitedCommand',
  name: "msg3",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[type3;message]
  $setServerVar[step;cmd3message]
  $onlyIf[$getServerVar[step]==cmd3type;]
  $title[Modification De La Commande : Partie 3]
  $description[__Quel sera le message de cette commande ?__]
  $footer[Indiquez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  type: 'awaitedCommand',
  name: "role3",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $setServerVar[type3;role]
  $setServerVar[step;cmd3role]
  $onlyIf[$getServerVar[step]==cmd3type;]
  $title[Modification De La Commande : Partie 3]
  $description[__Quel sera le role de cette commande ?__]
  $footer[Mentionnez le dans le chat...]
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "$alwaysExecute",
  code: `$setServerVar[role3;$mentionedRoles[1]]
  $setServerVar[step;]
  $setServerVar[stepchannel;]
  $onlyIf[$getServerVar[step]==cmd3role;]
  $onlyForChannels[$getServerVar[stepchannel];]
  $title[Modification De La Commande : Terminée]
  $description[__Le trigger de la commande 3 est désormais :__ \`$getServerVar[prefix]$getServerVar[trigger3]\`
  
  __Le rôle de la commande 3 est désormais :__
  
  \`\`\`$roleName[$mentionedRoles[1]]\`\`\`]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username.]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$setServerVar[message3;$message]
  $setServerVar[step;]
  $setServerVar[stepchannel;]
  $onlyIf[$getServerVar[step]==cmd3message;]
  $onlyForChannels[$getServerVar[stepchannel];]
  $title[Modification De La Commande : Terminée]
  $description[__Le trigger de la commande 3 est désormais :__ \`$getServerVar[prefix]$getServerVar[trigger3]\`
  
  __Le message de la commande 3 est désormais :__
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[YELLOW]
  $footer[Changé par $username.]
  $suppressErrors`
}]