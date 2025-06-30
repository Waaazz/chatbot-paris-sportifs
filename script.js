
const responses = {
    "1": {
        message: "Choisis la plateforme pour ouvrir un compte :",
        buttons: [
            { text: "1xBet", link: "https://1xbet.com", promo: "5522" },
            { text: "BetWinner", link: "https://prmbw.com/bw-zambia/", promo: "BFX226" },
            { text: "1Win", link: "https://1wpgjk.com/", promo: "515151" },
            { text: "88Starz", link: "https://bnnsssuscess.com/fr", promo: "AN5353" },
            { text: "MelBet", link: "https://melbet-339720.top/fr", promo: "ML_801633" },
            { text: "LineBet", link: "https://linebet1900.com/fr", promo: "AS33" },
            { text: "Pro1Bet", link: "https://pro1bet.com/fr", promo: "KAYA226" },
            { text: "À venir", link: "#", promo: "-" }
        ]
    },
    "2": {
        message: "🎁 Voici ta page promo :",
        buttons: [
            { text: "1xBet", link: "https://1xbet.com", promo: "5522" },
            { text: "BetWinner", link: "https://prmbw.com/bw-zambia/", promo: "BFX226" },
            { text: "1Win", link: "https://1wpgjk.com/", promo: "515151" },
            { text: "88Starz", link: "https://bnnsssuscess.com/fr", promo: "AN5353" },
            { text: "MelBet", link: "https://melbet-339720.top/fr", promo: "ML_801633" },
            { text: "LineBet", link: "https://linebet1900.com/fr", promo: "AS33" },
            { text: "Pro1Bet", link: "https://pro1bet.com/fr", promo: "KAYA226" },
            { text: "À venir", link: "#", promo: "-" }
        ]
    },
    "3": {
        message: "Choisis un moyen de contact :",
        buttons: [
            { text: "WhatsApp", link: "https://api.whatsapp.com/send/?phone=%2B22655373747&text&type=phone_number&app_absent=0" },
            { text: "Telegram", link: "https://t.me/+2Rcw93FVrrNiNzg0" },
            { text: "Facebook", link: "https://web.facebook.com/1xbetbetbf" },
            { text: "À venir", link: "#", promo: "-" }
        ]
    },
    "4": {
        message: "Visiter notre plate-forme : <a href='https://betbfbetrusse.com' style='color:#facc15;'>La plate-forme qu'il vous faut</a>"
    }
};

function addMessage(text, sender = 'bot') {
    const chatbox = document.getElementById("chatbox");
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender === 'bot' ? 'bot-message' : 'user-message'}`;
    msgDiv.innerHTML = text;
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function addButtons(buttons) {
    const container = document.createElement("div");
    container.className = "button-container submenu"; // Ajoute la classe 'submenu'
    buttons.forEach(btn => {
        const b = document.createElement("button");
        b.className = "option-button submenu-btn";
        b.textContent = btn.text + (btn.promo && btn.promo !== "-" ? ` (Code Promo: ${btn.promo})` : "");
        if (btn.link === "#") {
            b.disabled = true;
            b.style.opacity = "0.5";
            b.style.cursor = "not-allowed";
            b.title = "Fonctionnalité à venir...";
        } else {
            b.onclick = () => window.open(btn.link, '_blank');
        }
        container.appendChild(b);
    });
    document.getElementById("chatbox").appendChild(container);
}

function handleOption(key) {
    const res = responses[key];
    addMessage(res.message, 'bot');
    if (res.buttons) addButtons(res.buttons);
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const val = input.value.trim();
    if (!val) return;
    addMessage(val, 'user');
    input.value = "";
    if (responses[val]) handleOption(val);
    else {
        addMessage(" Veuillez choisir une option. Tape 1, 2, 3 ou 4 ou utilise les options ci-dessous.", 'bot');
    }
}
