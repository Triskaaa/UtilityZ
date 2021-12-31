module.exports = {
  type: 'joinCommand',
  channel: "$getServerVar[ChannelCaptcha]",
  code: `$title[CAPTCHA]
$color[YELLOW]
$description[<@$authorID> bienvenue. Veuillez completer le captcha pour avoir accès à la totalitée du serveur.
 
**Comment passer le Captcha :**
\`Indiquez dans le chat le code qui est indiqué dans l'image.\`
*Note* : Si il y a un espace, remplacez le par un \`+\`.

**Un problême ?**
Faites \`$getServerVar[prefix]captchagen\` pour re générer un nouveau captcha.]
$footer[♻️ UtilityZ Captcha]
$addTimestamp
 
$image[https://textoverimage.moesif.com/image?image_url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F756652259596566628%2F758396479265308702%2F20200923_203646.jpg&text=$randomString[8]&text_size=15&y_align=middle&x_align=center]
 
$setUserVar[Captcha;$randomString[8]]

$onlyIf[$getServerVar[RoleCaptcha]!=;:x: | **Ce serveur n'a pas fini la configuration du captcha.** Veuillez configurer le captcha en faisant \`+captchasetup\`]
$onlyIf[$getServerVar[ChannelCaptcha]!=;:x: | **Ce serveur n'a pas fini la configuration du captcha.** Veuillez configurer le captcha avec la commande \`+captchasetup\`]
$onlyForChannels[$getServerVar[ChannelCaptcha];:x: | **Cette commande est uniquement éxécutable dans le salon de captcha.**]`
}