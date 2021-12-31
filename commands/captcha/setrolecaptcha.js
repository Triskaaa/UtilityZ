module.exports = {
  name: "setrolecaptcha",
  code: `$setServerVar[RoleCaptcha;$mentionedRoles[1]]
$description[✅ |  <@&$mentionedRoles[1]> **sera automatiquement attribué au membres des qu'ils passeront le captcha.**]
$deletecommand
$color[#43ff3a]
$onlyPerms[admin;:x: | **Vous n'avez pas la permission d'éxécuter cette commande.**]
$onlyIf[$mentionedRoles[1]!=;:x: | **Veuillez mentionner le rôle qui sera automatiquement attribué au nouveau membres qui valideront le captcha.**]`
}