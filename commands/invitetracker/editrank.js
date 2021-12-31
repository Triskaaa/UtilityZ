module.exports = [{
  name: "editrank-1",
  code: `$argsCheck[>2;:x: | Veuillez **indiquer le nombre d'invitations.**]
  $onlyIf[$mentionedRoles[1]!=;:x: | Veuillez **indiquer un rôle.**]
  $setServerVar[Rank1;$message[2]]
  $setServerVar[Rank1role;$mentionedRoles[1]]
  $title[Rang d'invitation modifié]
  $description[Le rang 1 sera attribué lors des \`$message[2] invitations\` et attribueras le rôle : <@&$mentionedRoles[1]>]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "editrank-2",
  code: `$argsCheck[>2;:x: | Veuillez **indiquer le nombre d'invitations.**]
  $onlyIf[$mentionedRoles[1]!=;:x: | Veuillez **indiquer un rôle.**]
  $setServerVar[Rank2;$message[2]]
  $setServerVar[Rank2role;$mentionedRoles[1]]
  $title[Rang d'invitation modifié]
  $description[Le rang 2 sera attribué lors des \`$message[2] invitations\` et attribueras le rôle : <@&$mentionedRoles[1]>]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "editrank-3",
  code: `$argsCheck[>2;:x: | Veuillez **indiquer le nombre d'invitations.**]
  $onlyIf[$mentionedRoles[1]!=;:x: | Veuillez **indiquer un rôle.**]
  $setServerVar[Rank3;$message[2]]
  $setServerVar[Rank3role;$mentionedRoles[1]]
  $title[Rang d'invitation modifié]
  $description[Le rang 3 sera attribué lors des \`$message[2] invitations\` et attribueras le rôle : <@&$mentionedRoles[1]>]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "editrank-4",
  code: `$argsCheck[>2;:x: | Veuillez **indiquer le nombre d'invitations.**]
  $onlyIf[$mentionedRoles[1]!=;:x: | Veuillez **indiquer un rôle.**]
  $setServerVar[Rank4;$message[2]]
  $setServerVar[Rank4role;$mentionedRoles[1]]
  $title[Rang d'invitation modifié]
  $description[Le rang 4 sera attribué lors des \`$message[2] invitations\` et attribueras le rôle : <@&$mentionedRoles[1]>]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  name: "editrank-5",
  code: `$argsCheck[>2;:x: | Veuillez **indiquer le nombre d'invitations.**]
  $onlyIf[$mentionedRoles[1]!=;:x: | Veuillez **indiquer un rôle.**]
  $setServerVar[Rank5;$message[2]]
  $setServerVar[Rank5role;$mentionedRoles[1]]
  $title[Rang d'invitation modifié]
  $description[Le rang 5 sera attribué lors des \`$message[2] invitations\` et attribueras le rôle : <@&$mentionedRoles[1]>]
  $footer[Changé par $username]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}]