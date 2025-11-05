// Character object
const character = {
    name: "Snortleblat",
    class: "Forest Trickster",
    level: 1,
    health: 100,
    image: "snortleblat.png",
  
    attacked() {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        document.getElementById("status").textContent = `${this.name} has died 💀`;
        document.getElementById("attackBtn").disabled = true;
      }
      updateUI();
    },
  
    levelUp() {
      this.level++;
      updateUI();
    }
  };
  
  // Update content on the page
  function updateUI() {
    document.getElementById("charName").textContent = character.name;
    document.getElementById("charClass").textContent = character.class;
    document.getElementById("charLevel").textContent = character.level;
    document.getElementById("charHealth").textContent = character.health;
    document.getElementById("charImage").src = character.image;
  }
  
  // Button event listeners
  document.getElementById("attackBtn").addEventListener("click", () => character.attacked());
  document.getElementById("levelUpBtn").addEventListener("click", () => character.levelUp());
  
  // Initial display
  updateUI();
  