module.exports = {
  name: "ranks",
  code: `$title[Rangs d'invitations de $serverName]
  $description[1. **Invitations :** $getServerVar[Rank1] - Rôle : $getServerVar[Rank1role]
  2. **Invitations :** $getServerVar[Rank2] - Rôle : $getServerVar[Rank2role]
  3. **Invitations :** $getServerVar[Rank3] - Rôle : $getServerVar[Rank3role]
  4. **Invitations :** $getServerVar[Rank4] - Rôle : $getServerVar[Rank4role]
  5. **Invitations :** $getServerVar[Rank5] - Rôle : $getServerVar[Rank5role]]
  $addTimestamp
  $color[YELLOW]
  $footer[Pour modifier un rang, faites u.editrank-1/5 <role> <invitation>]`
}