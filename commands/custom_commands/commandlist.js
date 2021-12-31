module.exports = {
  name: "commandlist",
  code: `$title[Listes Des Commandes]
  $description[**1 :** \`$getServerVar[prefix]$getServerVar[trigger1]\` Type : $getServerVar[type1]
  **2 :** \`$getServerVar[prefix]$getServerVar[trigger2]\` Type : $getServerVar[type2]
  **3 :** \`$getServerVar[prefix]$getServerVar[trigger3]\` Type : $getServerVar[type3]]
  $color[YELLOW]
  $addTimestamp
  $footer[Pour modifier une commande, faites $getServerVar[prefix]editcommand.]
  `
}