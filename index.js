// By Triskaaa#9999

const Aoijs = require('aoi.js');

const bot = new Aoijs.Bot({
	sharding: false, // mettez true si vous utilisez les shards
	shardAmount: 2, // le nombre de shards
	mobile: false, //Mettez true pour avoir un statut avec l'icone mobile
	token: 'VOTRE TOKEN', //Le token de votre bot Discord (discord.dev)
	prefix: ['$getServerVar[prefix]', '<@$clientID>'], // ne pas toucher
	autoUpdate: false, //ne pas toucher
	fetchInvites: true // ne pas toucher
});

bot.onMessage();

bot.botJoinCommand({
	channel: '$randomChannelID',
	code: `$title[Merci De M'avoir ajouté !]
$description[Mon préfixe est \`u.\`
Vous pouvez voir la liste complête de mes commandes en faisant : \`u.help\`

**Si mon préfixe ne vous plait pas, faites** \`u.setprefix <votre prefixe>\`]
$addTimestamp
$color[YELLOW]` //message sent to <channel>
});

bot.onGuildJoin();

bot.onJoined();
bot.joinCommand({
	channel: '$getServerVar[Welcomechannel]',
	code: `$author[$username viens de rejoindre le serveur.;$authorAvatar]
  $description[$getServerVar[Welcomemessage]]
  $color[$getServerVar[Welcomecolor]]
  $footer[$membersCount ème membre.]`
});

bot.onLeave();
bot.leaveCommand({
	channel: '$getServerVar[Leavechannel]',
	code: `$author[$username viens de quiter le serveur.;$authorAvatar]
  $description[$getServerVar[Leavemessage]]
  $color[$getServerVar[Leavecolor]]
  $footer[Il reste $membersCount membre dans le serveur.]`
});

// COmmandes de musique

bot.command({
	name: 'play',
	code: `$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
	
$title[Musique ajoutée a la playliste]
	
$description[**Musique:** [$songInfo[title]\\]($songInfo[url])]
	
$addField[:stopwatch:| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
	
$addField[:dvd: | Vues:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
	
$addField[:coffee: | Auteur:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
	
$addField[:clock10: Mis en ligne:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]

$playSong[$message;5s;{title:Error}{description:**⛔ | J'ai rencontré une erreur.** }{color:RED}]
	
$onlyIf[$message!=;{title:Erreur}{description:**⛔ |** \`song\`...}]
	
$onlyIf[$voiceID!=;**⛔ | Vous n'êtes pas dans un salon vocal.**]
	
$cooldown[5s;:x: | Attends encore %time% avant de re éxécuter cette commande.]`
});

bot.command({
	name: 'skip',
	code: `$skipSong
:white_check_mark: **Musique sautée !**`
});

bot.command({
	name: 'loop',
	code: `:white_check_mark: **Votre playliste est désormais mise en boucle !** $loopQueue`
});

bot.command({
	name: 'pause',
	code: `:white_check_mark: **Musique pausée !** $pauseSong`
});

bot.command({
	name: 'resume',
	code: `:white_check_mark: **Musique résumée !** $resumeSong`
});

bot.command({
	name: 'stop',
	code: `:white_check_mark: **Musique arrétée !** $stopSong`
});

bot.command({
	name: 'queue',
	code: `**Queue du serveur (Musiques a venir) :**
$queue[1;10;{number} - {title} ajouté par <@{userID}>]`
});



// Allows Commands to Executed
bot.loadCommands(`./commands/`);

bot.status({
	text: 'u.help | $serverCount serveurs | $allMembersCount utilisateurs.',
	type: 'WATCHING',
	status: 'idle',
	time: 12
});

// Variables Bots
bot.variables({
	prefix: 'u.'
});

// Variables Modération
bot.variables({
	Warns: '0'
});

// Variables Captcha
bot.variables({
	RoleCaptcha: '',
	ChannelCaptcha: '',
	Captcha: '0'
});

// Variables Commandes Perso
bot.variables({
	trigger1: 'nondefini1',
	trigger2: 'nondefini2',
	trigger3: 'nondefini3',
	type1: '',
	type2: '',
	type3: '',
	message1: 'Commande Non Définie',
	message2: 'Commande Non Définie',
	message3: 'Commande Non Définie',
	role1: '',
	role2: '',
	role3: '',

	step: '',
	stepchannel: ''
});

// Variabes Messages de Bienvenue

bot.variables({
	Welcomechannel: '',
	Welcomecolor: 'YELLOW',
	Welcomemessage: '',
	Leavechannel: '',
	Leavemessage: '',
	Leavecolor: 'YELLOW',

	DMmessage: ''
});

// Variables Invite Tracker

bot.variables({
	InviteChannel: '',
	Invites: '0',
	InvitesLeave: '0',

	Rank1: '',
	Rank2: '',
	Rank3: '',
	Rank4: '',
	Rank5: '',

	Rank1role: '',
	Rank2role: '',
	Rank3role: '',
	Rank4role: '',
	Rank5role: ''
});

// Variables Tickets

bot.variables({
	PannelMessage: '',
	TicketMessage: '',
	PannelChannel: '',
	TicketCat: ''
});

bot.variables({
	Messagepub: '',
	Colorpub: 'YELLOW',
	Channelpub1: '',
	Channelpub2: '',
	Channelpub3: '',
	Channelpub4: '',
	Channelpub5: '',
	Channelpub6: '',
	Channelpub7: '',
	Channelpub8: '',
	Channelpub9: '',
	Channelpub10: '',
	Channelpub11: '',
	Channelpub12: '',
	Channelpub13: '',
	Channelpub14: '',
	Channelpub15: ''
});

// ID Pub

bot.variables({
  PubID1: '',
  PubID2: '',
  PubID3: '',
  PubID4: '',
  PubID5: '',
  PubID6: '',
  PubID7: '',
  PubID8: '',
  PubID9: '',
  PubID10: '',
  PubID11: '',
  PubID12: '',
  PubID13: '',
  PubID14: '',
  PubID15: ''
});

// Variables Modlog

bot.variables({
  Modlog: 'off',
  Modlogchannel: ''
})