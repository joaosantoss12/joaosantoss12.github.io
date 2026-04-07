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
          "🔥 Join the Action at LeBull Casino! 🔥💰<br><br>Get ready for an exciting betting adventure at <b>LeBull</b> — packed with top slots, live casino, and thrilling sportsbook action! New players receive <b>25 Free Spins</b> to start spinning right away!<br><br>🔥 <b>Wide Selection of Slots & Live Casino</b><br>⚽ <b>Sports Betting & Live Events</b><br>🔥 <b>Fast & Secure Withdrawals</b><br>🔥 <b>Daily Promotions & Exclusive Rewards</b><br>⚡ <b>User-Friendly Platform & 24/7 Support</b><br><br>Don't wait — <b>join LeBull now and take charge of your winnings!</b> 🐂🔥";
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

    case "btn100":
      sponsorText =
        "🌟 Step into Luxury with VIP Casino! 🎰💎<br><br>Enjoy a premium gambling experience with elite rewards, high-stakes games, and exclusive perks! Get a <b>100% welcome bonus + 77 free spins</b> when you join today!<br><br>🔥 <b>High-Limit Slots & VIP Tables</b><br>💰 <b>Massive Bonuses & Tailored Promotions</b><br>⚡ <b>Instant Withdrawals & Crypto Support</b><br>🎁 <b>Personal VIP Manager & Loyalty Rewards</b><br><br>Don't miss your chance—<b>Join VIP Casino now and play like royalty!</b> 👑🎲";
      break;
    
     case "btn111":
      sponsorText =
        "🏛️ Conquer Fortune at Roman Casino! 🎰🪙<br><br>Step into the empire of excitement where glory, gold, and great games await! New players get a <b>100% welcome bonus + 100 free spins</b> to start their victorious journey!<br><br>⚔️ <b>Epic Slots & Live Casino Battles</b><br>🏆 <b>Daily Rewards & Legendary Jackpots</b><br>💸 <b>Fast Payouts & Crypto-Friendly</b><br>🎖️ <b>Loyalty Program Inspired by Roman Glory</b><br><br>Ready to rule the reels?<br><b>Join Roman Casino today and play like a true Caesar!</b> 👑🎲";
      break;

    case "btn112":
      sponsorText =
        "🎯 Domine a Sorte no RokuBet Casino! 🎰🔥<br><br>Prepare-se para uma experiência de apostas lendária onde diversão e prêmios colossais te esperam! Novos jogadores recebem um <b>100% bônus de boas-vindas + 100 rodadas grátis</b> para começar com tudo!<br><br>💎 <b>Slots Explosivos & Cassino Ao Vivo</b><br>🏆 <b>Torneios Diários & Jackpots Gigantes</b><br>💸 <b>Saques Rápidos & Aceita Criptomoedas</b><br>🎁 <b>Programa VIP com Recompensas Exclusivas</b><br><br>Está pronto para apostar alto?<br><b>Entre no RokuBet agora e jogue como um verdadeiro campeão!</b> 🏅🎲";
      break;

    case "btn115":
      sponsorText =
    "🎯 Rule the Game at Vemabet Casino! 🎰🔥<br><br>Get ready for an unforgettable betting adventure packed with excitement, massive wins, and non-stop action! New players enjoy a <b>100% Welcome Bonus + 100 Free Spins</b> to kickstart the thrill!<br><br>💎 <b>Hot Slots & Live Casino Games</b><br>🏆 <b>Daily Tournaments & Huge Jackpots</b><br>💸 <b>Fast Payouts & Crypto Accepted</b><br>🎁 <b>Exclusive VIP Rewards Program</b><br><br>Are you ready to raise the stakes?<br><b>Join Vemabet now and play like a true champion!</b> 🏅🎲";
  break;

  case "btn1115":
      sponsorText =
    "🎰 Discover Fair Wins at FairPari Casino! 🌟💰<br><br>Join FairPari and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at FairPari now and start winning big!</b> 🎲🏆";
  break;

  case "btn1116":
      sponsorText =
    "🎰 Unlock Non-Stop Action at 1xBit Casino! 🌟💰<br><br>Step into the world of 1xBit and enjoy thrilling slots, live casino games, and sports betting with a crypto edge! New players get a <b>Welcome Bonus up to 7 BTC</b> across their first deposits!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Instant Crypto Deposits & Withdrawals</b><br>🎁 <b>Exclusive Promotions & Loyalty Rewards</b><br>⚡ <b>24/7 Support & Anonymous Registration</b><br><br>Don’t wait—<b>sign up at 1xBit today and play with Bitcoin!</b> 🎲🏆";
  break;

  case "btn1119":
      sponsorText =
    "🎰 Experience Ultimate Fun at SlotLair Casino! 🌟💰<br><br>Join SlotLair for an electrifying casino experience with top-tier slots, live dealer games, and massive bonuses! New players get a <b>100% Deposit Bonus + 300 Free Spins</b> to kickstart their adventure!<br><br>🔥 <b>Vast Selection of Slots & Live Casino</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at SlotLair now and start winning big!</b> 🎲🏆";
  break;

  case "btn333":
  sponsorText =
    "🎯 Unleash Your Luck on Hunt.gg! 💼🔫<br><br>Join <b>Hunt.gg</b> — the ultimate CS2 skin gaming site! Open cases, upgrade your skins, and battle other players for epic rewards. Whether you're hunting for knives, covert skins, or big multipliers, the thrill never stops!<br><br>💥 <b>Massive Selection of CS2 Cases</b><br>⚔️ <b>Upgrader, Battles, and Skin Trade Options</b><br>💸 <b>Instant Withdrawals & Secure Payments</b><br>🎁 <b>Exclusive Bonuses & Events</b><br>⚡ <b>Fast, Fair, and Exciting Gameplay</b><br><br>Don’t wait — <b>join Hunt.gg today and start your winning streak!</b> 🔥🎖️";
  break;


  case "btn10101":
  sponsorText =
    "🎰 Experience the Thrill at 888Starz Casino! 💎🔥<br><br>Step into <b>888Starz</b> — your ultimate destination for online casino fun! Spin the reels, try your luck at live tables, and enjoy endless entertainment with thousands of top-tier games and sports betting options.<br><br>💥 <b>Massive Selection of Slots & Live Casino Games</b><br>🎲 <b>Sportsbook, Poker, and Virtual Games</b><br>💸 <b>Fast Payouts & Secure Transactions</b><br>🎁 <b>Welcome Bonuses & Ongoing Promotions</b><br>⚡ <b>Top Providers & Fair Gameplay</b><br><br>Don’t wait — <b>join 888Starz today and feel the rush of real wins!</b> 🏆🎉";
  break;

  case "btn101010":
  sponsorText =
    "🎰 Spin Into Victory at WinSpirit Casino! 🌟💰<br><br>Join <b>WinSpirit</b> — where every spin brings you closer to incredible wins! Enjoy a massive selection of slots, live casino, and sports betting with generous bonuses. New players get a <b>Welcome Bonus up to 400€ + 100 Free Spins</b> on their first deposit!<br><br>🎰 <b>Thousands of Slots & Live Casino Games</b><br>⚽ <b>Sports Betting & Live Events</b><br>💸 <b>Fast Payouts & Secure Transactions</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & User-Friendly Interface</b><br><br>Don't wait — <b>join WinSpirit now and let your winning spirit shine!</b> 🏆✨";
  break;

  case "btn101011":
  sponsorText =
    "🔥 Welcome to IgniBet Casino — Where the Action Never Cools Down! 🎰💎<br><br>Step into <b>IgniBet</b> — your premium hub for online casino excitement! Spin, play, and win big with a world-class selection of games, live tables, and sports betting thrills.<br><br>💥 <b>Huge Variety of Slots & Live Casino Games</b><br>🎲 <b>Sportsbook, Poker, and Virtual Games</b><br>💸 <b>Lightning-Fast Payouts & Safe Transactions</b><br>🎁 <b>Exclusive Bonuses & Hot Promotions</b><br>⚡ <b>Trusted Providers & Fair Play Guaranteed</b><br><br>Don't miss out — <b>join IgniBet today and ignite your winning streak!</b> 🔥🏆🎉";
  break;

  case "btn1010111":
  sponsorText = "🔥 Experience the Ultimate CS:GO Casino Thrill at ForceDrop! 🎰💥<br><br>Dive into the action with <b>ForceDrop</b> — the premier CS:GO casino where every spin and bet brings you closer to epic wins! Open cases, play exciting games, and enjoy exclusive bonuses tailored for CS:GO enthusiasts.<br><br>💥 <b>Massive Selection of CS:GO Cases & Games</b><br>⚔️ <b>Upgrade Skins, Battle Other Players & More</b><br>💸 <b>Instant Withdrawals & Secure Payments</b><br>🎁 <b>Exclusive Bonuses & Daily Promotions</b><br>⚡ <b>Fast, Fair, and Exciting Gameplay</b><br><br>Don't wait — <b>join ForceDrop now and elevate your CS:GO gaming experience!</b> 🔥🎖️";
  break;

  /* REELS IO CASINO */
  case "btnreels": 
  sponsorText = "🎰 Elevate Your Gaming at Reels.io Casino! 💎🔥<br><br>Step into <b>Reels.io</b> — your ultimate destination for online casino excitement! Spin the reels, try your luck at live tables, and enjoy endless entertainment with thousands of top-tier games and sports betting options.<br><br>💥 <b>Massive Selection of Slots & Live Casino Games</b><br>🎲 <b>Sportsbook, Poker, and Virtual Games</b><br>💸 <b>Fast Payouts & Secure Transactions</b><br>🎁 <b>Welcome Bonuses & Ongoing Promotions</b><br>⚡ <b>Top Providers & Fair Gameplay</b><br><br>Don’t wait — <b>join Reels.io today and feel the rush of real wins!</b> 🏆🎉";
  break;

  /* MINEBIT CASINO */ 
  case "btn9999":
  sponsorText = "🎰 Discover Endless Fun at MineBit Casino! 💎🔥<br><br>Step into <b>MineBit</b> — your ultimate destination for online casino excitement! Spin the reels, try your luck at live tables, and enjoy endless entertainment with thousands of top-tier games and sports betting options.<br><br>💥 <b>Massive Selection of Slots & Live Casino Games</b><br>🎲 <b>Sportsbook, Poker, and Virtual Games</b><br>💸 <b>Fast Payouts & Secure Transactions</b><br>🎁 <b>Welcome Bonuses & Ongoing Promotions</b><br>⚡ <b>Top Providers & Fair Gameplay</b><br><br>Don’t wait — <b>join MineBit today and feel the rush of real wins!</b> 🏆🎉";
      break;

  case "btnfairpari":
    sponsorText = "🎰 Discover Fair Wins at FairPari Casino! 🌟💰<br><br>Join FairPari and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at FairPari now and start winning big!</b> 🎲🏆";
    break;

  case "btnwinwin":
  sponsorText = "🎰 Discover Fair Wins at WinWin Casino! 🌟💰<br><br>Join WinWin and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at WinWin now and start winning big!</b> 🎲🏆";
  break;

  case "btnamonbet":
  sponsorText = "🎰 Discover Fair Wins at AmonBet Casino! 🌟💰<br><br>Join AmonBet and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at AmonBet now and start winning big!</b> 🎲🏆";
    break;

  case "btnbetpanda":
    sponsorText = "🎰 Discover Fair Wins at BetPanda Casino! 🌟💰<br><br>Join BetPanda and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at BetPanda now and start winning big!</b> 🎲🏆";
    break;

  case "btnezz":
    sponsorText = "🎰 Discover Fair Wins at EZZ Casino! 🌟💰<br><br>Join EZZ and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at EZZ now and start winning big!</b> 🎲🏆";
    break;

  case "btnfortunejack":
    sponsorText = "🎰 Discover Fair Wins at FortuneJack Casino! 🌟💰<br><br>Join FortuneJack and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at FortuneJack now and start winning big!</b> 🎲🏆";
    break;

  case "btnqzino":
    sponsorText = "🎰 Discover Fair Wins at Qzino Casino! 🌟💰<br><br>Join Qzino and experience a world of top-tier slots, live casino action, and sports betting excitement! New players get a <b>100% Welcome Bonus or 150 Free Spins</b> on their first deposit!<br><br>🔥 <b>Thousands of Casino Games & Sports Events</b><br>💸 <b>Fast Withdrawals & Crypto-Friendly</b><br>🎁 <b>Daily Promotions & VIP Rewards</b><br>⚡ <b>24/7 Support & Secure Transactions</b><br><br>Don’t miss out—<b>sign up at Qzino now and start winning big!</b> 🎲🏆";
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
