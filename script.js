let currentLang = 'en';

const translations = {
  en: {
    status: "Operational",
    tag: "Protected by VoidedX and Protection",
    titleMain: "Execute seamlessly.",
    titleSub: "Luthor Hub Tcs script",
    description: "copy to ur executer and run it",
    cardTitle: "Loadstring and Execute seamlessly.",
    btnCopy: "Copy",
    btnCopied: "Copied!",
    protectionLabel: "Protection",
    protectionVal: "VoidedX",
    accessLabel: "Access",
    accessVal: "Public Stream"
  },
  pt: {
    status: "Operacional",
    tag: "Protegido por VoidedX e Protection",
    titleMain: "Execute sem problemas.",
    titleSub: "Luthor Hub Tcs script",
    description: "copie para seu executor e execute",
    cardTitle: "Loadstring e Execute seamlessly.",
    btnCopy: "Copiar",
    btnCopied: "Copiado!",
    protectionLabel: "Proteção",
    protectionVal: "VoidedX",
    accessLabel: "Acesso",
    accessVal: "Transmissão Pública"
  }
};

function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerText = t[key];
    }
  });

  // Update split title
  const titleEl = document.getElementById('heroTitle');
  titleEl.innerHTML = `${t.titleMain}<br><span class="gradient-text">${t.titleSub}</span>`;
}

function copyScript() {
  const codeText = document.getElementById('loadstring').innerText;
  const button = document.getElementById('copyBtn');
  const buttonText = button.querySelector('span');

  navigator.clipboard.writeText(codeText).then(() => {
    buttonText.innerText = translations[currentLang].btnCopied;
    button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    button.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';

    setTimeout(() => {
      buttonText.innerText = translations[currentLang].btnCopy;
      button.style.background = 'linear-gradient(135deg, var(--accent-purple), var(--accent-glow))';
      button.style.boxShadow = '0 4px 15px rgba(147, 51, 234, 0.3)';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}