module.exports = [{
  name: "setinvitechannel",
  code: `$onlyIf[$mentionedChannels[1]!=;:x: | Veuillez **mentionner un salon.**]
  $setServerVar[InviteChannel;$mentionedChannels[1]]
  $title[Salon des Logs d'invitations]
  $description[Le salon des logs des invitations est désormais le : <#$mentionedChannels[1]>]
  $addTimestamp
  $color[YELLOW]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécuter cette commande.**]`
}, {
  type: 'joinCommand',
  channel: "$getServerVar[InviteChannel]",
  code: `$setUserVar[Invites;$sum[$getUserVar[Invites];1];$userInfo[inviter;$authorID]]
  **$username** viens de rejoindre. Il ou elle a été invité par **$username[$userInfo[inviter;$authorID]]** qui a désormais **$sum[$getUserVar[Invites;$userInfo[inviter;$authorID];1]] invitation(s).**
  $suppressErrors`
}, {
  type: 'leaveCommand',
  channel: "$getServerVar[InviteChannel]",
  code: `$setUserVar[Invites;$sub[$getUserVar[Invites];1];$userInfo[inviter;$authorID]]
  
  $setUserVar[InvitesLeave;$sum[$getUserVar[InvitesLeave];1];$userInfo[inviter;$authorID]]


  $suppressErrors[Je n'ai pas pu comprendre comment **$username** a rejoins le serveur... Peut être une invitation temporaire/personalisée.]
  **$username** viens de quiter le serveur. Il ou elle avait été invité par **$username[$userInfo[inviter;$authorID]]**.`
}, {
  name: "resetinvites",
  code: `$resetUserVar[Invites]
  $onlyPerms[admin;:x: | Vous **n'avez pas la permition d'éxécute cette comande.**]
  $title[Invitations Rénitialisées]
  $description[Les invitations de **tous les membres du serveur** ont été **Rénitialisées !**]
  $addTimestamp
  $color[YELLOW]`
}, {
  name: "invites",
  code: `$title[Invitations]
  $description[*Vous avez :*
  
  :white_check_mark: - **$userInfo[real;$authorID] invitation(s) réelles.**
  :x: - **$getUserVar[InvitesLeave] quitées.**
  ✨ - **$userInfo[fake;$authorID] fakes.**
  :gem: - **$getUserVar[Invites] invitation(s) comptabilisées.**]
  $thumbnail[$authorAvatar]
  $addTimestamp
  $color[YELLOW]`
}]