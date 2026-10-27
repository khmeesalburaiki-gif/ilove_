const messages = [
    "أول شيء… أتمنى أن تكون بخير، حتى لو كانت المسافة بيننا طويلة. 🌙",

    "أحيانًا يمرّ يوم عادي، ثم أتذكرك… فيصير لليوم معنى مختلف. ✨",

    "الشوق مو دائمًا كلام كثير؛ أحيانًا هو دعوة صادقة لك، وابتسامة تجي من غير سبب. 💗",

    "لو كان بإمكاني إرسال شعور بدل رسالة، لأرسلت لك طمأنينة تقول: أنت شخص غالٍ عندي. 💌",

    "وهذه آخر المفاجأة… أتمنى أن تحمل لك الأيام فرحًا يشبه الأثر الجميل الذي تتركه في قلبي. 🤍"
];

const messageElement = document.getElementById("message");
const counterElement = document.getElementById("counter");
const revealButton = document.getElementById("revealBtn");
const restartButton = document.getElementById("restartBtn");

let currentMessage = 0;

revealButton.addEventListener("click", () => {
    if (currentMessage < messages.length) {
        messageElement.classList.add("fade-out");

        window.setTimeout(() => {
            messageElement.textContent = messages[currentMessage];

            currentMessage += 1;

            messageElement.classList.remove("fade-out");

            counterElement.textContent =
                `رسالة ${currentMessage} من ${messages.length} ✨`;

            if (currentMessage === messages.length) {
                revealButton.textContent = "وصلت الرسالة إلى القلب ❤️";

                document.body.classList.add("finished");

                restartButton.hidden = false;
            } else {
                revealButton.textContent = "اكشف الرسالة التالية ✨";
            }
        }, 300);
    }
});

restartButton.addEventListener("click", () => {
    currentMessage = 0;

    messageElement.textContent =
        "إذا وصلت لهنا، خذ نفسًا هادئًا… عندي لك مفاجأة صغيرة.";

    counterElement.textContent = "البداية فقط ✨";

    revealButton.textContent = "افتح أول باب 💌";

    document.body.classList.remove("finished");

    restartButton.hidden = true;
});