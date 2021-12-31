module.exports = [{
  name: "$alwaysExecute",
  code: `
  $giveRole[$authorID;$getServerVar[Rank1role]]
  $onlyIf[$getUserVar[Invites]==$getServerVar[Rank1];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$takeRole[$authorID;$getServerVar[Rank1role]]
  $onlyIf[$getUserVar[Invites]!=$getServerVar[Rank1];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `
  $giveRole[$authorID;$getServerVar[Rank2role]]
  $onlyIf[$getUserVar[Invites]==$getServerVar[Rank2];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$takeRole[$authorID;$getServerVar[Rank2role]]
  $onlyIf[$getUserVar[Invites]!=$getServerVar[Rank2];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `
  $giveRole[$authorID;$getServerVar[Rank3role]]
  $onlyIf[$getUserVar[Invites]==$getServerVar[Rank3];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$takeRole[$authorID;$getServerVar[Rank3role]]
  $onlyIf[$getUserVar[Invites]!=$getServerVar[Rank3];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `
  $giveRole[$authorID;$getServerVar[Rank4role]]
  $onlyIf[$getUserVar[Invites]==$getServerVar[Rank4];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$takeRole[$authorID;$getServerVar[Rank4role]]
  $onlyIf[$getUserVar[Invites]!=$getServerVar[Rank4];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `
  $giveRole[$authorID;$getServerVar[Rank5role]]
  $onlyIf[$getUserVar[Invites]==$getServerVar[Rank5];]
  $suppressErrors`
}, {
  name: "$alwaysExecute",
  code: `$takeRole[$authorID;$getServerVar[Rank5role]]
  $onlyIf[$getUserVar[Invites]!=$getServerVar[Rank5];]
  $suppressErrors`
}]