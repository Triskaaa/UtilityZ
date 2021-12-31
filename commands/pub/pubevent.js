module.exports = [{
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub1];]
$setServerVar[PubID1;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]

`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub1];]
$deleteMessage[$channelID;$getServerVar[PubID1]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub2];]
$setServerVar[PubID2;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub2];]
$deleteMessage[$channelID;$getServerVar[PubID2]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub3];]
$setServerVar[PubID3;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub3];]
$deleteMessage[$channelID;$getServerVar[PubID3]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub4];]
$setServerVar[PubID4;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub4];]
$deleteMessage[$channelID;$getServerVar[PubID4]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub5];]
$setServerVar[PubID5;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub5];]
$deleteMessage[$channelID;$getServerVar[PubID5]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub6];]
$setServerVar[PubID6;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub6];]
$deleteMessage[$channelID;$getServerVar[PubID6]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub7];]
$setServerVar[PubID7;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub7];]
$deleteMessage[$channelID;$getServerVar[PubID7]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub8];]
$setServerVar[PubID8;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub8];]
$deleteMessage[$channelID;$getServerVar[PubID8]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub9];]
$setServerVar[PubID9;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub9];]
$deleteMessage[$channelID;$getServerVar[PubID9]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub10];]
$setServerVar[PubID10;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub10];]
$deleteMessage[$channelID;$getServerVar[PubID10]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub11];]
$setServerVar[PubID11;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub11];]
$deleteMessage[$channelID;$getServerVar[PubID11]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub12];]
$setServerVar[PubID12;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub12];]
$deleteMessage[$channelID;$getServerVar[PubID12]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub13];]
$setServerVar[PubID13;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub13];]
$deleteMessage[$channelID;$getServerVar[PubID13]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub14];]
$setServerVar[PubID14;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub14];]
$deleteMessage[$channelID;$getServerVar[PubID14]]
$suppressErrors
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub15];]
$setServerVar[PubID15;$sendMessage[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]};yes]]

$suppressErrors[{description:$getServerVar[Messagepub]}{color:$getServerVar[Colorpub]}]
`
}, {
  name: "$alwaysExecute",
  code: `
$onlyForChannels[$getServerVar[Channelpub15];]
$deleteMessage[$channelID;$getServerVar[PubID15]]
$suppressErrors
`
}]