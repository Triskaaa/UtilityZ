module.exports = [{
  name: "kick",
  code: `$dm[$mentioned[1]]
  $title[Expulsion]
  $description[Vous avez été éxpulsé de $serverName .
  
  **Informations :**
  
  __Modérateur :__ $username[$authorID]
  __Raison :__ $noMentionMessage]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[kick;]
  $argsCheck[>2;]
  $onlyIf[$mentioned[1]!=;]`
}, {
  name: "kick",
  code: `$deletecommand
  $title[Utilisateur Expulsé]
  $description[**Modérateur :** <@$authorID>
  **Utilisateur éxpulsé :** <@$mentioned[1]>
  **Raison :** $noMentionMessage]
  $footer[Utilisateur Expulsé]
  $addTimestamp
  $color[YELLOW]
  $kick[$mentioned[1];$noMentionMessage]
    $onlyPerms[kick;{title:ERREUR}{description:Vous n'avez pas la permition d'éxécuter cette commande.}{color:RED}{footer:$username a tenté d'éxpulser $username[$mentioned[1]]}]
  $argsCheck[>2;:x: | Veuillez **indiquer une raison de l'éxpulsion.**]
  $onlyIf[$mentioned[1]!=;:x: | Veuillez **mentionner un utilisateur.**]`
}]