module.exports = {
  name: "setcaptchachannel",
  code: `$setServerVar[ChannelCaptcha;$mentionedChannels[1;yes]]
$deletecommand
$color[#43ff3a]
$title[Configuration Du Captcha]
$description[Le salon du captcha est maintenant le <#$mentionedChannels[1;yes]>.]
$addTimestamp
$argsCheck[>1;:x: | **Veuillez mentionner le salon du captcha.** Exemple : \`$getServerVar[prefix]setcaptchachannel #captcha\`.]
$onlyPerms[admin;:x: | **Vous n'avez pas la permission d'éxécuter cette commande.**]`
}