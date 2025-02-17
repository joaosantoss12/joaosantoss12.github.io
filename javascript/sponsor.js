// Function to open the modal and display the info
function openInfoPanel(button) {
    var sponsorImage = button.closest('.sponsor').querySelector('.sponsor-img img').src;
    let sponsorText = '';

    console.log(button);

    switch(button.id) {
        case 'btn1':
            sponsorText = "Looking for the best crypto casino? Join BC Game and enjoy instant payouts, massive bonuses, and high-stakes excitement! Get up to 3 BTC upon registering!<br><br>🚀 Instant Deposits & Withdrawals<br>🎁 Huge Welcome Bonuses<br>🎮 Provably Fair Games<br>💎 Daily Rewards & VIP Perks<br><br>Sign up now and start playing! Don't miss your chance to win big! 💰🎲";
            break;
        case 'btn2':
            sponsorText = "Ready to hit the jackpot? 🎰 Join Slott Casino and experience top-tier slots, thrilling table games, and massive rewards! Get 200% extra balance on deposit + 75 free spins!<br><br>🚀 Instant Withdrawals & Crypto-Friendly<br>🎁 Huge Welcome Bonuses & Free Spins<br>🎮 Provably Fair & Exciting Games<br>💎 VIP Perks & Daily Rewards<br><br>Sign up now and start winning big! Don't miss out on your chance for massive payouts! 💰🔥";
            break;
        case 'btn3':
            sponsorText = "🔥 Open Cases & Win Big on KeyDrop! 🔥 Get the best CS:GO skins with insane case openings, giveaways, and daily rewards! Use my code [VALEK] for 10% extra balance on deposit!<br><br>🎁 Free Daily Bonuses & Promotions<br>💰 Huge Case Openings & Jackpots<br>🔒 Fair & Secure System<br>🎮 Instant Skin Withdrawals<br><br>Don't miss out—join KeyDrop now and claim your rewards! 🚀🔑";
            break;
        case 'btn4':
            sponsorText = "🏴‍☠️ Set Sail with PirateSwap! 🚀 Swap, stake, and earn crypto treasures on the high seas! Use my code [VALEK] for 35% extra balance on deposit!<br><br>⚡ Fast & Low-Cost Swaps<br>🔐 Secure & Decentralized Platform<br><br>Join the PirateSwap crew now and start earning like a true pirate! ☠️💎";
            break;
        case 'btn5':
            sponsorText = "🎲 Win Big with CSGOFast! 🎰<br><br>Join one of the most trusted CS:GO gambling sites since 2016! Use my code [VALEK] for 10% extra balance and a free case on deposit!<br><br>🔥 Instant & Fair Case Battles<br>💰 Huge Jackpots & Daily Bonuses<br>🎁 Exclusive Giveaways for My Code Users<br>⚡ Fast Deposits & Withdrawals<br><br>Don't miss out—sign up now and start winning big skins today! 🚀";
            break;
        case 'btn6':
            sponsorText = "🎉 Join the Action at Leon Casino! 🎰<br><br>Experience top-tier casino games, amazing bonuses, and non-stop excitement at Leon Casino! Use my code [VALEK] to unlock exclusive rewards and start playing today!<br><br>💎 Huge Welcome Bonus & Free Spins<br>🎮 Wide Variety of Games & Slots<br>⚡ Fast Withdrawals & Secure Transactions<br>🎁 Daily Promotions & VIP Perks<br><br>Don’t miss out—sign up now and hit the jackpot at Leon Casino! 💰🚀";
            break;
        case 'btn7':
            sponsorText = "🎰 Discover the Thrills at Casinoly! 💥<br><br>Step into a world of exciting games, massive jackpots, and exclusive rewards at Casinoly! Use my code [VALEK] to claim a special bonus and kickstart your adventure today!<br><br>💎 Big Welcome Bonuses & Free Spins<br>🎮 Top Casino Games & Slots<br>⚡ Fast Withdrawals & Secure Payments<br>🎁 VIP Rewards & Daily Promotions<br><br>Don't wait—sign up now and start winning big at Casinoly! 💰🔥";
            break;
    }

    // Set the image and text in the modal
    document.getElementById('modalImage').src = sponsorImage;
    document.getElementById('modalText').innerHTML = sponsorText;

    // Display the modal
    document.getElementById('infoModal').style.display = "block";
}

// Function to close the modal
function closeInfoPanel() {
    document.getElementById('infoModal').style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}