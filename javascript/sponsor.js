// Function to open the modal and display the info
function openInfoPanel(button) {
  var sponsorImage = button
    .closest(".sponsor")
    .querySelector(".sponsor-img img").src;
  let sponsorText = "";

  console.log(button);

  switch (button.id) {
    case "btn1":
      sponsorText =
        "Looking for the best crypto casino? Join BC Game and enjoy instant payouts, massive bonuses, and high-stakes excitement! Get up to 3 BTC upon registering!<br><br>🚀 Instant Deposits & Withdrawals<br>🎁 Huge Welcome Bonuses<br>🎮 Provably Fair Games<br>💎 Daily Rewards & VIP Perks<br><br>Sign up now and start playing! Don't miss your chance to win big! 💰🎲";
      break;
    case "btn2":
      sponsorText =
        "Ready to hit the jackpot? 🎰 Join Slott Casino and experience top-tier slots, thrilling table games, and massive rewards! Get 200% extra balance on deposit + 75 free spins!<br><br>🚀 Instant Withdrawals & Crypto-Friendly<br>🎁 Huge Welcome Bonuses & Free Spins<br>🎮 Provably Fair & Exciting Games<br>💎 VIP Perks & Daily Rewards<br><br>Sign up now and start winning big! Don't miss out on your chance for massive payouts! 💰🔥";
      break;
    case "btn3":
      sponsorText =
        "🔥 Open Cases & Win Big on KeyDrop! 🔥 Get the best CS:GO skins with insane case openings, giveaways, and daily rewards! Use my code [VALEK] for 10% extra balance on deposit!<br><br>🎁 Free Daily Bonuses & Promotions<br>💰 Huge Case Openings & Jackpots<br>🔒 Fair & Secure System<br>🎮 Instant Skin Withdrawals<br><br>Don't miss out—join KeyDrop now and claim your rewards! 🚀🔑";
      break;
    case "btn4":
      sponsorText =
        "🏴‍☠️ Set Sail with PirateSwap! 🚀 Swap, stake, and earn crypto treasures on the high seas! Use my code [VALEK] for 35% extra balance on deposit!<br><br>⚡ Fast & Low-Cost Swaps<br>🔐 Secure & Decentralized Platform<br><br>Join the PirateSwap crew now and start earning like a true pirate! ☠️💎";
      break;
    case "btn5":
      sponsorText =
        "🎲 Win Big with CSGOFast! 🎰<br><br>Join one of the most trusted CS:GO gambling sites since 2016! Use my code [VALEK] for 10% extra balance and a free case on deposit!<br><br>🔥 Instant & Fair Case Battles<br>💰 Huge Jackpots & Daily Bonuses<br>🎁 Exclusive Giveaways for My Code Users<br>⚡ Fast Deposits & Withdrawals<br><br>Don't miss out—sign up now and start winning big skins today! 🚀";
      break;
    case "btn6":
      sponsorText =
        "🎉 Join the Action at Leon Casino! 🎰<br><br>Experience top-tier casino games, amazing bonuses, and non-stop excitement at Leon Casino! Use my code [VALEK] to unlock exclusive rewards and start playing today!<br><br>💎 Huge Welcome Bonus & Free Spins<br>🎮 Wide Variety of Games & Slots<br>⚡ Fast Withdrawals & Secure Transactions<br>🎁 Daily Promotions & VIP Perks<br><br>Don’t miss out—sign up now and hit the jackpot at Leon Casino! 💰🚀";
      break;
    case "btn7":
      sponsorText =
        "🎰 Unleash the Magic at SpellWin Casino! ✨<br><br>Step into a world of enchanting wins and thrilling casino games at SpellWin! Get ready for huge jackpots, exciting slots, and exclusive bonuses. Use my link to claim a <b>200% welcome bonus + free spins</b> and start your adventure today!<br><br>🔥 <b>Massive Welcome Bonuses & Free Spins</b><br>🎮 <b>Top-Tier Slots & Live Casino Games</b><br>⚡ <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>VIP Perks & Daily Rewards</b><br><br>Don’t miss out—<b>sign up now</b> and let the magic of SpellWin bring you huge wins! 💰🎩✨";
      break;
    case "btn10":
      sponsorText =
        "🔥 Spin & Win at TikiTaka Casino! 🎰<br><br>Step into the ultimate casino adventure with TikiTaka! Enjoy high-energy slots, thrilling table games, and generous bonuses. Use my code [VALEK] for exclusive rewards and start winning big today!<br><br>🎁 Huge Welcome Bonus & Free Spins<br>🎮 Exciting Slots & Live Casino Games<br>⚡ Fast Withdrawals & Crypto-Friendly<br>💎 VIP Perks & Daily Rewards<br><br>Sign up now and experience the thrill of TikiTaka Casino! 💰🔥";
      break;
      case "btn11":
      sponsorText =
        "👑 Rule the Game at Kyngs Casino! 🎰🔥<br><br>Step into the kingdom of fortune and claim incredible offers! Get a <b>200% welcome bonus on your first deposit + 100 free spins</b> to boost your winnings!<br><br>💰 <b>Epic welcome bonuses</b><br>🎮 <b>Slots, Roulette, Blackjack, and more</b><br>⚡ <b>Fast withdrawals & 24/7 support</b><br>🎁 <b>Daily promotions & exclusive VIP club</b><br><br>Don’t miss out—<b>Play now and become the true king of betting!</b> 👑💎";
      break;

      case "btn12":
        sponsorText =
        
          "🎰 Spin & Win Big at Vinci Spin Casino! 🔥💰<br><br>Experience top-tier casino action with huge jackpots, thrilling slots, and unbeatable bonuses! Get a <b>250% welcome bonus + 100 free spins</b> on your first deposit!<br><br>🚀 <b>Instant Withdrawals & Crypto-Friendly</b><br>🎁 <b>Massive Bonuses & Daily Rewards</b><br>🎮 <b>Exciting Slots, Live Casino & More</b><br>💎 <b>VIP Perks for Exclusive Players</b><br><br>Don't miss out—<b>Join Vinci Spin now and start winning today!</b> 🎲💸";
        break;

        case "btn13":
          sponsorText =
            "🎰 Take Your Luck to the Next Level at RTBet Casino! 🔥💰<br><br>Experience an exciting world of slots, table games, and live dealers with massive bonuses! Get a <b>100% welcome bonus + 200 free spins</b> on your first deposit!<br><br>🚀 <b>Instant Withdrawals & Crypto-Friendly</b><br>🎁 <b>Huge Bonuses & Daily Promotions</b><br>🎮 <b>Exciting Slots, Live Casino & More</b><br>💎 <b>VIP Rewards & Exclusive Perks</b><br><br>Don't miss out—<b>Join RTBet now and start winning today!</b> 🎲💸";
          break;

          case "btn14":
          sponsorText =
          "🔥 Win Big on CSGOBig! 🎲💰<br><br>Join one of the most exciting CS:GO gambling platforms and test your luck in jackpots, case openings, and more! Use my code [VALEK] for an exclusive 10% deposit bonus!<br><br>🎁 <b>Huge Jackpots & Case Openings</b><br>💰 <b>Fair & Secure Gambling System</b><br>🚀 <b>Fast Deposits & Withdrawals</b><br>🎮 <b>Daily Rewards & Promotions</b><br><br>Don't miss your chance—<b>Join CSGOBig now and start winning today!</b> 🔥🔑"  
          break;

          case "btn15":
        sponsorText =
          "🍭 Win Sweet Rewards at CandySpinz Casino! 🍬🎰<br><br>Step into a colorful world of fun and fortune at CandySpinz! Enjoy exciting slots, juicy bonuses, and a sugar rush of rewards. Use my code link for an exclusive <b>up to 1500€ welcome bonus + 300 free spins</b> on your first deposit!<br><br>🍓 <b>Delicious Welcome Bonuses</b><br>🎮 <b>Fun & Colorful Slots + Live Casino</b><br>⚡ <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Rewards & VIP Treats</b><br><br>Don’t miss out—<b>join CandySpinz now and let the sweet wins begin!</b> 💰🍬🎉";
        break;

        case "btn16":
        sponsorText =
          "⚽💸 Get in the Game with Rabona Casino & Sportsbook! 🎰🔥<br><br>Enjoy the best of both worlds—sports betting and online casino thrills in one place! Claim a <b>welcome bonus of up to 100% bonus deposit</b> on your first deposit!<br><br>🏆 <b>Live & Pre-Match Sports Betting</b><br>🎮 <b>Slots, Roulette, Blackjack & Live Casino</b><br>🚀 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & Exclusive VIP Club</b><br><br>Don't miss out—<b>Join Rabona now and play like a champion!</b> ⚽🎲💰";
        break;

    case "btn20":
      sponsorText = "🎯 Win Big on CSFAIL! 🎲<br><br>Take your chances and win awesome CS:GO skins at CSFAIL! Use my code [VALEK] for an exclusive 10% bonus on your first deposit!<br><br>🔥 Instant Case Openings<br>💰 Fair & Secure System<br>🎁 Daily Bonuses & Promotions<br>⚡ Fast Withdrawals<br><br>Sign up now and start winning big! 🚀💥";
      break;
    case "btn30":
      sponsorText = "🎰 Bet Big at BetTilt Casino! 💥<br><br>Enjoy a wide range of casino games, from slots to live dealers, with amazing bonuses! Use my code [VALEK] for exclusive rewards and boost your chances to win!<br><br>🔥 Huge Welcome Bonuses & Free Spins<br>🎮 Top-Tier Casino Games & Sports Betting<br>⚡ Fast & Secure Withdrawals<br>🎁 Daily Promotions & VIP Perks<br><br>Sign up now and start winning at BetTilt Casino! 💰";
      break;
  }

  // Set the image and text in the modal
  document.getElementById("modalImage").src = sponsorImage;
  document.getElementById("modalText").innerHTML = sponsorText;

  // Display the modal
  document.getElementById("infoModal").style.display = "block";
}

// Function to close the modal
function closeInfoPanel() {
  document.getElementById("infoModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("infoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
