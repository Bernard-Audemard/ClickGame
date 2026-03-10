
class ClickerGame {
  constructor() {
    // DOM Elements
    this.buttonMessage = document.getElementById("meuBotao");
    this.mensagem = document.getElementById("mensagem");
    this.contadorElemento = document.getElementById("contador");
    this.buttonReset = document.getElementById("resetar");
    this.buttonLimpar = document.getElementById("limpar");
    this.buttonToggleTema = document.getElementById("toggleTema");
    this.themeHistoryList = document.getElementById("themeHistory");
    this.buttonClearThemeHistory = document.getElementById("clearThemeHistory");
    this.themeCounter = document.getElementById("themeCounter");

    // Game State
    this.clickCount = 0;
    this.totalClicks = 0;
    this.premioLiberado = false;
    this.themeHistory = [];
    

    // Constants
    this.MAX_CLICKS_FOR_MESSAGE = 20;
    this.PREMIO_THRESHOLD = 100;
    this.THEME_HISTORY_LIMIT = 5;

    this.init();
  }

  init() {
    this.loadData();
    this.setupEventListeners();
    this.applyTheme();
    this.updateUI();
    this.renderThemeHistory();
  }

  // --- Local Storage Management ---
  _getLocalStorageItem(key, defaultValue = null) {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    try {
      return JSON.parse(item);
    } catch (e) {
      return item; // Return as string if not valid JSON
    }
  }

  _setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  _removeLocalStorageItem(key) {
    localStorage.removeItem(key);
  }

  loadData() {
    this.clickCount = parseInt(this._getLocalStorageItem("clickCount", 0));
    this.totalClicks = parseInt(this._getLocalStorageItem("totalClicks", 0));
    this.premioLiberado = this._getLocalStorageItem("premioLiberado", false);
    this.themeHistory = this._getLocalStorageItem("themeHistory", []);
  }

  saveData() {
    this._setLocalStorageItem("clickCount", this.clickCount);
    this._setLocalStorageItem("totalClicks", this.totalClicks);
    this._setLocalStorageItem("premioLiberado", this.premioLiberado);
    this._setLocalStorageItem("themeHistory", this.themeHistory);
    this._setLocalStorageItem("currentTheme", document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }

  clearProgress() {
    this.clickCount = 0;
    this.totalClicks = 0;
    this.premioLiberado = false;
    this.themeHistory = [];

    this._removeLocalStorageItem("clickCount");
    this._removeLocalStorageItem("totalClicks");
    this._removeLocalStorageItem("premioLiberado");
    this._removeLocalStorageItem("themeHistory");
    this._removeLocalStorageItem("currentTheme");

    this.applyTheme(); // Reset theme to default if desired, or keep current
    this.updateUI();
    this.renderThemeHistory();
    this.showMessage("✅ Progresso restaurado! Comece novamente.", "black");
  }

  // --- Event Listeners ---
  setupEventListeners() {
    this.buttonMessage.addEventListener("click", () => this.handleMessageButtonClick());
    this.buttonReset.addEventListener("click", () => this.handleResetButtonClick());
    this.buttonLimpar.addEventListener("click", () => this.clearProgress());
    this.buttonToggleTema.addEventListener("click", () => this.toggleTheme());
    this.buttonClearThemeHistory.addEventListener("click", () => this.clearThemeHistory());
  }

  handleMessageButtonClick() {
    this.clickCount++;
    this.totalClicks++;
    this.updateUI();
    this.saveData();
  }

  handleResetButtonClick() {
    this.clickCount = 0;
    this.totalClicks++; // Reset still counts as a total click
    this.updateUI();
    this.saveData();
  }

  // --- UI Updates ---
  updateUI() {
    this.updateClickCounter();
    this.updateMessageDisplay();
    this.checkPremioStatus();
    this.updateButtonStates();
  }

  updateClickCounter() {
    this.contadorElemento.textContent = `Cliques: ${this.totalClicks}`;
    if (this.totalClicks < 5) {
      this.contadorElemento.style.color = "green";
    } else if (this.totalClicks < 10) {
      this.contadorElemento.style.color = "blue";
    } else {
      this.contadorElemento.style.color = "red";
    }
  }

  updateMessageDisplay() {
    let messageText = "";
    let messageColor = "black";

    if (this.clickCount === 0) {
      messageText = "ESTOU TENTANDO APRENDER HTML/JAVASCRIPT SOZINHO, MAS ESTOU ENFRENTANDO ALGUMAS DIFICULDADES.";
    } else if (this.clickCount === 1) {
      messageText = "Você clicou no botão 1 vez!";
      messageColor = "blue";
    } else if (this.clickCount < 10) {
      messageText = `Você clicou no botão ${this.clickCount} vezes!`;
      messageColor = "goldenrod";
    } else if (this.clickCount < this.MAX_CLICKS_FOR_MESSAGE) {
      messageText = `Você clicou no botão ${this.clickCount} vezes!`;
      messageColor = "red";
    } else {
      messageText = "🚀 Você virou um mestre dos cliques!";
      messageColor = "purple";
    }
    this.showMessage(messageText, messageColor);
  }

  showMessage(text, color = "black") {
    this.mensagem.textContent = text;
    this.mensagem.style.color = color;
  }

  updateButtonStates() {
    this.buttonMessage.disabled = this.clickCount >= this.MAX_CLICKS_FOR_MESSAGE || this.premioLiberado;
    this.buttonReset.disabled = this.premioLiberado;
  }

  checkPremioStatus() {
    if (this.totalClicks >= this.PREMIO_THRESHOLD && !this.premioLiberado) {
      this.premioLiberado = true;
      alert("Parabéns! Você alcançou 100 cliques totais!");
      this.saveData(); // Save immediately after premio is liberated
      this.updateButtonStates(); // Update button states after premio
    }
  }

  // --- Theme Management ---
  applyTheme() {
    const savedTheme = this._getLocalStorageItem("currentTheme", 'light');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  toggleTheme() {

  document.body.classList.toggle('dark-theme');

  const temaAtual =
    document.body.classList.contains('dark-theme') ? 'dark' : 'light';

  this.addThemeToHistory(temaAtual);

  this.themeCounter.textContent = `Temas utilizados: ${this.themeHistory.length}`;

  this.saveData();

}

  addThemeToHistory(themeName) {

  const now = new Date()

  const entry = {
    theme: themeName,
    time: now.toLocaleTimeString()
  }

  this.themeHistory.push(entry)

  if (this.themeHistory.length > this.THEME_HISTORY_LIMIT) {
    this.themeHistory.shift()
  }

  this.renderThemeHistory()
}

 renderThemeHistory() {

  if (!this.themeHistoryList) return

  this.themeHistoryList.innerHTML = ""

  this.themeCounter.textContent =
    `Temas utilizados: ${this.themeHistory.length}`

  this.themeHistory
    .slice()
    .reverse()
    .forEach((entry, index) => {

      const li = document.createElement("li")

      const buttonTheme = document.createElement("button")
      buttonTheme.classList.add("buttonThemeClear")
      buttonTheme.textContent = "❌"

      li.textContent = `${entry.theme} — ${entry.time} `

      buttonTheme.dataset.index = index

      buttonTheme.addEventListener("click", (e) => {

        const index = e.target.dataset.index
        this.removeThemeFromHistory(index)

      })

      li.appendChild(buttonTheme)

      this.themeHistoryList.appendChild(li)

    })

}
  removeThemeFromHistory(index) {

  this.themeHistory.splice(index, 1)

  this.saveData()

  this.renderThemeHistory()

}
clearThemeHistory() {
 

  this.themeHistory = []

  this._removeLocalStorageItem("themeHistory")

  this.renderThemeHistory()
    alert("Histórico de temas limpo!")
  
  }
}
// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  new ClickerGame();
});