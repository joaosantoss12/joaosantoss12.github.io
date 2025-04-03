followersTwitch();
followersInstagram();
membersDiscord();

function followersTwitch() {
  const element = document.getElementById("twitch-followers-count");
  const element2 = document.getElementById("twitch-followers-count2");

  var url = "https://api.twitch.tv/helix/users/follows?to_id=151725719";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader(
    "Authorization",
    "Bearer kre7yreki9l6s0xupsmmaeknd7rfi8"
  );
  xhr.setRequestHeader("Client-Id", "y1ibkpac3xaw0gem7vcac2ufkkxwkx");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const obj = JSON.parse(xhr.responseText);
      console.log(obj);

      element.innerHTML = obj.total.toLocaleString("en-IN") + " FOLLOWERS";
      element2.innerHTML = obj.total.toLocaleString("en-IN") + " FOLLOWERS";
    }
  };

  xhr.send();
}

function followersInstagram() {
  const element = document.getElementById("instagram-followers-count");
  const element2 = document.getElementById("instagram-followers-count2");

  const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://instagram-looter2.p.rapidapi.com/profile2?username=valek.37');
xhr.setRequestHeader('x-rapidapi-key', '3d759affa1msh0b5e830f1021164p144c26jsn7293ceb5cfc7');
xhr.setRequestHeader('x-rapidapi-host', 'instagram-looter2.p.rapidapi.com');


  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const obj = JSON.parse(xhr.responseText);
      console.log(obj.follower_count);

        element.innerHTML = obj.follower_count.toLocaleString("en-IN") + " FOLLOWERS";
        element2.innerHTML = obj.follower_count.toLocaleString("en-IN") +  " FOLLOWERS";
    }
  };

  xhr.send();
}

function membersDiscord(){
  const element = document.getElementById("discord-members-count");
  const element2 = document.getElementById("discord-members-count2");

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.open(
    "GET",
    "https://discord.com/api/v9/invites/NFeTaHBgaq?with_counts=true&with_expiration=true"
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const obj = JSON.parse(xhr.responseText);

      element.innerHTML = obj.approximate_member_count.toLocaleString("en-IN") + " MEMBERS";
      element2.innerHTML = obj.approximate_member_count.toLocaleString("en-IN") + " MEMBERS";
    }
  };

  xhr.send();
}