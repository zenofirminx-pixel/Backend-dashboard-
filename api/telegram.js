const FR_KEYWORDS = [
"bonjour",
"salut",
"hello",
"bonsoir",
"aurx",
"ia",
"assistant",
"application",
"app",
"télécharger",
"download"
];

const EN_KEYWORDS = [
"hi",
"hello",
"hey",
"download",
"app",
"application",
"ai",
"assistant",
"aurx"
];

const replies = [
`🤖 Bienvenue sur AurX !

Je suis le bot officiel d'AurX.

AurX est une intelligence artificielle moderne accessible directement depuis votre navigateur.

📲 Utiliser AurX :
https://aurx.vercel.app

Ouvrez le lien puis ajoutez l'application à votre écran d'accueil pour une expérience complète.`,

`🚀 Salut !

Merci de votre intérêt pour AurX.

AurX est conçu pour répondre à vos questions, vous aider à apprendre et vous accompagner dans vos projets.

📱 Essayez AurX ici :
https://aurx.vercel.app

L'installation prend moins d'une minute.`,

`✨ Bienvenue !

Vous cherchez une IA simple, rapide et intelligente ?

AurX est disponible gratuitement depuis votre navigateur.

🔗 Accéder à AurX :
https://aurx.vercel.app

Une fois ouvert, vous pouvez l'installer comme une application classique.`,

`🤖 Hello and welcome!

You are currently talking to the official AurX assistant bot.

AurX is an AI assistant available directly from your browser.

📲 Launch AurX:
https://aurx.vercel.app

Open the link and install it on your device for the best experience.`,

`🚀 Hi there!

Looking for AurX AI?

You can access the application here:

https://aurx.vercel.app

AurX works on Android, desktop and most modern browsers.`,

`👋 Welcome to AurX!

AurX is an intelligent AI assistant built to help users learn, create and explore ideas.

🌍 Open AurX:
https://aurx.vercel.app

Thank you for supporting the project.`
];

function getRandomReply() {
return replies[Math.floor(Math.random() * replies.length)];
}