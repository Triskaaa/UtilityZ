module.exports = [{
  name: "setpannelmessage",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas le permition d'éxécute cette commande.**]
  $argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[PannelMessage;$message]
  $title[Message du Pannel]
  $description[Le message du pannel des tickets est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[YELLOW]`
}, {
  name: "setticketmessage",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas le permition d'éxécute cette commande.**]
  $argsCheck[>1;:x: | Veuillez **indiquer un message.**]
  $setServerVar[TicketMessage;$message]
  $title[Message du Ticket]
  $description[Le message des tickets est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[YELLOW]`
}, {
  name: "setticketcat",
  code: `$onlyPerms[admin;:x: | Vous **n'avez pas le permition d'éxécute cette commande.**]
  $argsCheck[>1;:x: | Veuillez **indiquer une cathégorie.**]
  $setServerVar[TicketCat;$message]
  $title[Cathégorie du Ticket]
  $description[La cathégorie des tickets est désormais :
  
  \`\`\`$message\`\`\`]
  $addTimestamp
  $color[YELLOW]`
}]