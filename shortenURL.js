function getURL() {
    // Selecting the input element and get its value
    let urlInput = document.getElementById("urlInput").value;

    // reset input field
    // document.getElementById("urlInput").value = "";
    let prefixURL = urlInput.startsWith("http://") || urlInput.startsWith("https://") || urlInput.startsWith("ftp://");
    if (!prefixURL) {
        newurl = "http://" + urlInput;
        return newurl;
    }
    else {
        return urlInput;
    }
}

function fetchURL() {
    let longURL = getURL();
    let apiURL = `https://api.shrtco.de/v2/shorten?url=${longURL}`;
    fetch(apiURL)
        .then(response => response.json())
        .then(data => (data.result))
        .catch(error => console.warn(error));
}

let domain = null;

async function shortenUrl() { 
    resetHTML();   
    console.log(domain);
    let longURL = getURL();
    let apiURL = `https://api.shrtco.de/v2/shorten?url=${longURL}`;
    
    document.getElementById("ring").style.display = "block";
    await fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            data !==null && (document.getElementById("ring").style.display = "none");
            // document.getElementById("text-noti").innerText = "Link generated!";
            if (domain === "shrtco.de") {
                document.getElementById("text-noti").innerText = "Link generated!";
                outPutURL(data.result.full_short_link);
            } else {
                if (domain === "9qr.de") {
                    document.getElementById("text-noti").innerText = "Link generated!";
                    outPutURL(data.result.full_short_link2);
                } else {
                    document.getElementById("text-noti").innerText = "Link generated!";
                    outPutURL(data.result.full_short_link3);
                }
            }
        })
        .catch(error => console.warn(error));
    
}

function onClickDomain(id) {
    let domainName = document.getElementById(id).value;
    domain = domainName;
}


function outPutURL(string) {
    document.getElementById("resultURL").innerText = string;
}

function resetHTML() { 
    document.getElementById("text-noti").innerText = "";
    document.getElementById("resultURL").innerText = "";
}

/* if (domainName === "shrtco.de") {
    // console.log(shortURL.full_short_link);
    finalLink = shortURL.full_short_link;
    outPutURL(shortURL.full_short_link);
} else {
    if (domainName === "9qr.de") {
        // console.log(shortURL.full_short_link2);
        finalLink = shortURL.full_short_link2;
        outPutURL(shortURL.full_short_link);
    } else {
        // console.log(shortURL.full_short_link3);
        finalLink = shortURL.full_short_link3;
        outPutURL(shortURL.full_short_link);
    }
} */
/* function getRandomURL() {
    let randomStr = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(5, 9);
    return randomStr;
} */