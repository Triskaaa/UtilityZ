module.exports = [{
  name: "unwarn",
  code: `$title[Utilisateur Désavertis]
  $description[**Utilisateur concerné :** <@$mentioned[1]>
  **Modérateur :** <@$authorID>
  **Warns :** $sub[$getUserVar[Warns;$mentioned[1]];1]]
  $footer[Utilisateur Désavertis]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[kick;:w: | Vous **n'avez pas la permition d'éxécuter cette commande.**]
  $onlyIf[$mentioned[1]!=;:x: | Veuillez **mentionner un utilisateur.**]`
}, {
  name: "unwarn",
  code: `$dm[$mentioned[1]]
  $title[Désvertissement]
  $description[Vous avez été désaverti sur $servername .
  
  **Informations :**
  
  __Modérateur :__ $username
  __Vous avez désormais :__ $sub[$getUserVar[Warns;$mentioned[1]];1] warns.]
  $addTimestamp
  $color[YELLOW]
  $onlyIf[$mentioned[1]!=;]
  $onlyPerms[kick;]`
}]