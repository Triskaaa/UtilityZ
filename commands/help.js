module.exports = [{
  name: "help",
  code: `$reactionCollector[$splitText[1];everyone;1m;🔄,⚔,✅,✨,💼,📩,🎫,🗣️,🎶,📢;home,moderation,captcha,customcommands,welcomer,invites,ticketshelp,gestionserv,musique,pub;yes]
$textSplit[$sendMessage[{title: Menu D'Aide : Accueil}{description:Réagissez avec les réactions pour accerder aux pages suivantes:

⚔ - \`Modération\`
✅ - \`Captcha\`
✨ - \`Commandes Personalisées\`
💼 - \`Messages de Bienvenue/Aurevoir\`
📩 - \`Trackeur D'Invitations\`
🎫 - \`Système de Tickets\`
🗣️ - \`Gestion du serveur\`
🎶 - \`Musique\`
📢 - \`Messages de pubs\`}{color:YELLOW}{footer:Demandé par $username};yes]; ]`
}, {
  type: 'awaitedCommand',
  name: "home",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Accueil} {description:Réagissez avec les réactions pour accerder aux pages suivantes:

⚔ - \`Modération\`
✅ - \`Captcha\`
✨ - \`Commandes Personalisées\`
💼 - \`Messages de Bienvenue/Aurevoir\`
📩 - \`Trackeur D'Invitations\`
🎫 - \`Système de Tickets\`
🗣️ - \`Gestion du serveur\`
🎶 - \`Musique\`} {color:YELLOW}{footer:Demandé par $username}
]`
}, {
  type: 'awaitedCommand',
  name: "moderation",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Modération} {description:\`$getServerVar[prefix]kick <utilisateur> <raison>\` Expulse l'utilisateur mentionné.
  \`$getServerVar[prefix]ban <utilisateur> <raison>\` Bannis l'utilisateur mentioné.
  \`$getServerVar[prefix]warn <utilisateur> <raison>\` Avertis l'utilisateur mentioné.
  \`$getServerVar[prefix]unwarn <@utilisateur>\` Désavertis l'utilisateur mentionné.
  \`$getServerVar[prefix]checkwarns <@utilisateur>\` Vois les warns de l'utilisateur mentionné.} {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}
]`
}, {
  type: 'awaitedCommand',
  name: "captcha",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Captcha} {description:\`$getServerVar[prefix]setrolecaptcha <@role>\` Définis le rôle qui sera attribué lors de la réussite du captcha.
  \`$getServerVar[prefix]setcaptchachannel <#salon>\` Définis le salons ou vont apparaitre les captchas.
  \`$getServerVar[prefix]captchagen\` Génères un nouveaux captcha.} {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}
]`
}, {
  type: 'awaitedCommand',
  name: "customcommands",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Commandes Personalisées} {description:\`$getServerVar[prefix]commandlist\` Vois la liste des commandes personnalisées du serveur.
  \`$getServerVar[prefix]editcommand\` Modifies les commandes.} {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}, {
  type: 'awaitedCommand',
  name: "welcomer",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Messages de Bienvenue/Aurevoir} {description:**Bienvenue :**
  
  \`$getServerVar[prefix]setwelcomechannel <#salon>\` Définis le salon ou apparaiterons les messages de Bienvenue.
  \`$getServerVar[prefix]setwelcomemessage <votre message>\` Définis le message de bienvenue.
  \`$getServerVar[prefix]setwelcomecolor <couleur en HEX>\` Définis la couleur des messages de bienvenue.
  
  **Aurevoir :**
  
  \`$getServerVar[prefix]setleavechannel <#salon>\` Définis le salon ou apparaiterons les messages d'aurevoir.
  \`$getServerVar[prefix]setleavemessage <votre message>\` Définis le message d'aurevoir'.
  \`$getServerVar[prefix]setleavecolor <couleur en HEX>\` Définis la couleur des messages d'aurevoir.
  
  **Bienvenue MP :**
  
  \`$getServerVar[prefix]setwelcomemessage <votre message>\` Définis le message de bienvenue.} {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}, {
  type: 'awaitedCommand',
  name: "invites",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Trackeur D'Invitations} {description:\`$getServerVar[prefix]setinvitechannel <#salon>\` Définis le salon ou apparaiterons les logs d'invitations. Obligatoire pour utiliser le système de rangs.
  \`$getServerVar[prefix]ranks\` Vois les rangs du serveur.
  \`$getServerVar[prefix]editrank-1/2/3/4/5 <@role> <nombre d'invitations>\` Modifies de rang.
  \`$getServerVar[prefix]resetinvites\` Rénitialise les invitations de tous les membres du serveur.
  \`$getServerVar[prefix]invites\` Vois les invitations de l'utilisateur.} {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}, {
  type: 'awaitedCommand',
  name: "ticketshelp",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Tickets} {description:\`$getServerVar[prefix]setticketmessage <votre message>\` Définis le message des tickets. 
  \`$getServerVar[prefix]setticketcat <ID de cathégorie>\` Définis la cathégorie ou vont s'ouvrir les tickets. *Obligatoire.*
  \`$getServerVar[prefix]setpannelmessage <votre message>\` Définis le message du pannel des tickets.
  \`$getServerVar[prefix]sendpanel\` Envoie le pannel dans le salon actuel.
  
  **N'OUBLIEZ PAS QUE LES PANNELS DES TICKETS EXPIRENT APRES 24 JOURS.** *Vous pouvez re éxécuter la commande pour générer un nouveaux pannel.*} {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}, {
  type: 'awaitedCommand',
  name: "gestionserv",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Gestion du Serveur} {description:\`$getServerVar[prefix]nick-all <votre pseudo>\` Renomes tous les membres du serveur avec le <nom>. Si le nom est laissé vide, ca rénitialise les pseusdos des membres. *Sauf les admins*
  \`$getServerVar[prefix]kick-all\` Expulse tous les membres du serveur *Saufs les admins*
  \`$getServerVar[prefix]role-all <@role>\` Donnes un rôle a tous les membres du serveur.
 } {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}, {
  type: 'awaitedCommand',
  name: "musique",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Musique} {description:\`$getServerVar[prefix]play <musique>\` Joue la musique dans le salon vocal.
\`$getServerVar[prefix]skip\` Passe a la musique suivante dans la playliste.
\`$getServerVar[prefix]loop\` Mets la playlist.
\`$getServerVar[prefix]queue\` Vois la playliste.
\`$getServerVar[prefix]pause\` Pause la playliste en cours.
\`$getServerVar[prefix]resume\` Résule la playliste.
 } {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}, {
  type: 'awaitedCommand',
  name: "pub",
  code: `$editMessage[$message[1];{title:Menu D'Aide : Pub} {description:\`$getServerVar[prefix]setmessagepub <message>\` Définis le message de pub.
\`$getServerVar[prefix]setcolorpub <HEX>\` Définis la couleur du message de pub. Doit etres un code HEX ou une couleur. Ex : YELLOW
\`$getServerVar[prefix]setchannelpub<1-15> <#salon>\` Définis les salons de pub.
\`$getServerVar[prefix]seepub\` Vois le message de pub actuel.
\`$getServerVar[prefix]seechannelspub\` Vois les salons de pub.
 } {color:YELLOW} {footer:Réagissez avec 🔄 pour retourner a la page d'acceuil.}`
}]