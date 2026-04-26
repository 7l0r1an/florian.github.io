// =====================
// 1. TYPING EFFECT
// =====================
const typingText = "Hi, my name is Florian";
const typingTarget = document.getElementById("typing-title");
let charIndex = 0;

function typeWriter() {
    if (charIndex < typingText.length) {
        typingTarget.textContent += typingText[charIndex];
        charIndex++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();


// =====================
// 2. EMAILJS CONTACT FORM
// =====================
const EMAILJS_PUBLIC_KEY   = "ehbDY2EiHjjhDYLJG";
const EMAILJS_SERVICE_ID   = "service_75vm8ur";
const EMAILJS_TEMPLATE_ID  = "template_7rsd8fg";

emailjs.init(EMAILJS_PUBLIC_KEY);

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("from_name").value,
        reply_to:  document.getElementById("reply_to").value,
        message:   document.getElementById("message").value,
    };

    const status = document.getElementById("form-status");
    status.textContent = "Sending...";
    status.style.color = "#888";

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(() => {
            status.textContent = "Message sent! I'll get back to you soon.";
            status.style.color = "#4caf50";
            document.getElementById("contact-form").reset();
        })
        .catch((err) => {
            status.textContent = "Something went wrong. Try emailing me directly.";
            status.style.color = "#e94560";
            console.error(err);
        });
});