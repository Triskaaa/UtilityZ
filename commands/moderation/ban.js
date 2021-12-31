module.exports = [{
  name: "ban",
  code: `$dm[$mentioned[1]]
  $title[Bannisement]
  $description[Vous avez été banni de $serverName .
  
  **Informations :**
  
  __Modérateur :__ $username[$authorID]
  __Raison :__ $noMentionMessage]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[ban;]
  $argsCheck[>2;]
  $onlyIf[$mentioned[1]!=;]`
}, {
  name: "ban",
  code: `$deletecommand
  $title[Utilisateur Banni]
  $description[**Modérateur :** <@$authorID>
  **Utilisateur Banni :** <@$mentioned[1]>
  **Raison :** $noMentionMessage]
  $footer[Utilisateur Banni]
  $addTimestamp$color[YELLOW]
  $ban[$mentioned[1];$noMentionMessage]
    $onlyPerms[ban;{title:ERREUR}{description:Vous n'avez pas la permition d'éxécuter cette commande.}{color:RED}{footer:$username a tenté de ban $username[$mentioned[1]]}]
  $argsCheck[>2;:x: | Veuillez **indiquer une raison de bannisement.**]
  $onlyIf[$mentioned[1]!=;:x: | Veuillez **mentionner un utilisateur.**]`
}]