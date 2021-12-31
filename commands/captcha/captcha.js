module.exports = {
  name: "$alwaysExecute",
  code: `$giveRole[$authorID;$getServerVar[RoleCaptcha]]
$title[Félicitations]
$color[#43ff3a]
$description[✅ | Félicitations <@$authorID>, vous avez passé **le captcha avez succès.**]
$footer[♻️ UtilityZ Captcha]
$addTimestamp
$deletecommand
$onlyIfMessageContains[$message;$getUserVar[Captcha;$authorID];:x: | Captcha **incorrecte.**]
$onlyIf[$getServerVar[RoleCaptcha]!=;]
$onlyIf[$getServerVar[ChannelCaptcha]!=;]
$onlyForChannels[$getServerVar[ChannelCaptcha];]`
}