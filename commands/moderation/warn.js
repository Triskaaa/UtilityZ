module.exports = [{
  name: "warn",
  code: `$dm[$mentioned[1]]
  $title[Avertissement]
  $description[Vous avez été averti sur $servername .
  
  **Informations :**
  
  __Modérateur :__ $username
  __Raison :__ $noMentionMessage]
  $addTimestamp
  $color[YELLOW]
  $onlyIf[$mentioned[1]!=;]
  $onlyPerms[kick;]
  $argsCheck[>2;]`
}, {
  name: "warn",
  code: `$deletecommand
  $title[Utlisateur Averti]
  $description[**Modérateur :** <@$authorID>
  **Utilisateur Averti :** <@$mentioned[1]>
  **Raison :** $noMentionMessage
  **Warn N° :** $sum[$getUserVar[Warns;$mentioned[1]];1]]
  $footer[Utlisateur Averti]
  $addTimestamp
  $color[YELLOW]
  $setUserVar[Warns;$sum[$getUserVar[Warns;$mentioned[1]];1];$mentioned[1]]
  $onlyIf[$mentioned[1]!=;:x: | Veuillez **mentionner un utlisateur.**]
  $onlyPerms[kick;{title:ERREUR}{description:Vous n'avez pas la permition d'éxécuter cette commande}{footer:$username  a tenté d'avertir $username[$mentioned[1]]{color:RED}]
  $argsCheck[>2;:x: | Veuillez **indiquer une raison.**]`
}]