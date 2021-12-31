module.exports = [{
  name: "$alwaysExecute",
  code: `$suppressErrors
  $getServerVar[message1]
  $onlyIf[$getServerVar[type1]==message;]
  $onlyIfMessageContains[$message;$getServerVar[prefix]$getServerVar[trigger1]; ]`
}, {
  name: "$alwaysExecute",
  code: `$suppressErrors
  $giveRoles[$authorID;$getServerVar[role1]]
  $onlyIf[$getServerVar[type1]==role;]
  $onlyIfMessageContains[$message;$getServerVar[prefix]$getServerVar[trigger1]; ]
  :white_check_mark: | **Je vous ai attribué le rôle :** \`$getServerVar[role1]\`
  `
}, {
  name: "$alwaysExecute",
  code: `$suppressErrors
  $getServerVar[message2]
  $onlyIf[$getServerVar[type2]==message;]
  $onlyIfMessageContains[$message;$getServerVar[prefix]$getServerVar[trigger2]; ]`
}, {
  name: "$alwaysExecute",
  code: `$suppressErrors
  $giveRoles[$authorID;$getServerVar[role2]]
  $onlyIf[$getServerVar[type2]==role;]
  $onlyIfMessageContains[$message;$getServerVar[prefix]$getServerVar[trigger2]; ]
  :white_check_mark: | **Je vous ai attribué le rôle :** \`$getServerVar[role2]\`
  `
}, {
  name: "$alwaysExecute",
  code: `$suppressErrors
  $getServerVar[message3]
  $onlyIf[$getServerVar[type3]==message;]
  $onlyIfMessageContains[$message;$getServerVar[prefix]$getServerVar[trigger3]; ]`
}, {
  name: "$alwaysExecute",
  code: `$suppressErrors
  $giveRoles[$authorID;$getServerVar[role3]]
  $onlyIf[$getServerVar[type3]==role;]
  $onlyIfMessageContains[$message;$getServerVar[prefix]$getServerVar[trigger3]; ]
  :white_check_mark: | **Je vous ai attribué le rôle :** \`$getServerVar[role3]\`
  `
}]