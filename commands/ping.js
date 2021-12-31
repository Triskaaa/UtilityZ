module.exports = {
  name: "$alwaysExecute",
  code: `$onlyIfMessageContains[$message;842415126639280169; ]
  $title[Bien de bonjour !]
  $description[Je suis **UtilityZ,** un bot discord **multifontions.**
  
  Mon préfixe sur ce serveur est : \`$getServerVar[prefix]\`
  Vous pouvez voir la totalitée de mes commandes en faisant : \`$getServerVar[prefix]help\`]
  $addTimestamp
  $color[YELLOW]
  $thumbnail[https://i.imgur.com/CNnFIoz.png]
  `
}