
export function setLoggedInUserInfo() {
    const request = {
        method: "GET",
        headers: getHeaders()
    }
    const url = BACKEND_HOST_URL + "/api/users/authinfo";
    fetch(url, request)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
        window.localStorage.setItem("tsumami_user", JSON.stringify(data));
    });
}

export function checkForLoginTokens(url) {
    // console.log(url);
    // access_token is given back from spring after #
    let parts = url.split("#");
    if(parts.length < 2)
        return false;

    parts = parts[1].split("&");
    let tokens = [];
    for (let i = 0; i < parts.length; i++) {
        const pair = parts[i].split("=");
        if(pair.length > 1 && (pair[0] === "access_token" || pair[0] === "refresh_token"))
            tokens[pair[0]] = pair[1];
    }
    if(!tokens['access_token'])
        return false;

    setTokens(tokens);
    return true;
}

/**
 * Gets the Authorization header needed for making requests to protected endpoints
 * This function should be used only after the user is logged in
 * @returns {{Authorization: string, "Content-Type": string}|{"Content-Type": string}}
 */
export function getHeaders() {
    const token = localStorage.getItem("access_token");
    return token
        ? {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${token}`}
        : {'Content-Type': 'application/json'};
}

/**
 * Attempts to set the access and refresh tokens needs to authenticate and authorize the client and user
 * @param responseData
 */
function setTokens(responseData) {
    if (responseData['access_token']) {
        localStorage.setItem("access_token", responseData['access_token']);
        console.log("Access token set");
    }
    if (responseData['refresh_token']) {
        localStorage.setItem("refresh_token", responseData['refresh_token']);
        console.log("Refresh token set")
    }
}

export function isLoggedIn() {
    if(localStorage.getItem('access_token')) {
        return true;
    } else {
        return false;
    }
}

export async function isRegistered() {
    const request = {
        method: "GET",
        headers: getHeaders()
    };
    let email = await fetch(`/api/users/authinfo`, request)
        .then((response) => {
            return response.json();
        }).then(data => {
            return data.email
        }).catch(error => {
            console.log("FETCH ERROR: " + error);
            //    return data.email or similar
        });

    //create endpoint to access email from db
    const request2 = {
        method: "GET",
        headers: getHeaders()
    }

    await fetch(`/api/users/findByEmail/${email}`, request)
        .then((response) => {
            if (response.status === 401) {
                return false;
            } else return true;
        })
}

//  returns an object with user_name and authority from the access_token
export function getUser() {
    const accessToken = localStorage.getItem("access_token");
    if(!accessToken) {
        return false;
    }
    return JSON.parse(window.localStorage.getItem("tsumami_user"));
}

export async function removeStaleTokens() {
    console.log("Removing stale tokens...");

    // clear tokens from localStorage if backend tells us the tokens are invalid
    // make the request
    const request = {
        method: 'GET',
        headers: getHeaders()
    };
    await fetch(`/api/users/authinfo`, request)
        .then((response) => {
            // if fetch error then you might be using stale tokens
            if (response.status === 401) {
                window.localStorage.clear();
            }
        }).catch(error => {
            console.log("FETCH ERROR: " + error);
        });
}

/*
export default function addLoginEvent() {
    console.log("entered addLoginEvent")
    document.querySelector("#login-btn").addEventListener("click", function () {
        let obj = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
            grant_type: 'password'
        }
        console.log("got to login event")
        // TODO: these are the only request params /oauth/token accepts in Spring Security
        // TODO: need to possibly implement a random bit handshake w/ SHA256 on the password before sending
        //      -> Alternatively, encrypt the entire request body
        let request = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('rest-blog-client:secret')
            },
            body: `grant_type=${obj.grant_type}&username=${obj.username}&password=${obj.password}&client_id=rest-blog-client`
        };

        fetchData(
            {
                route: `/oauth/token`
            },
            request).then((data) => {
            setTokens(data);
            createView("/");
        });
    });
}

export function getHeaders() {
    const token = localStorage.getItem("access_token");
    return token
        ? {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${token}`}
        : {'Content-Type': 'application/json'};
}

function setTokens(responseData) {
    if (responseData['access_token']) {
        localStorage.setItem("access_token", responseData['access_token']);
        console.log("Access token set");
    }
    if (responseData['refresh_token']) {
        localStorage.setItem("refresh_token", responseData['refresh_token']);
        console.log("Refresh token set")
    }
}
export function isLoggedIn() {
    if(localStorage.getItem('access_token')) {
        return true;
    } else {
        return false;
    }

}

//  returns an object with username and authority from the access_token
export function getUser() {
    const accessToken = localStorage.getItem("access_token");
    if(!accessToken) {
        return false;
    }
    const parts = accessToken.split('.');
    const payload = parts[1];
    const decodedPayload = atob(payload);
    const payloadObject = JSON.parse(decodedPayload);
    const user = {
        username: payloadObject.username,
        role: payloadObject.authorities[0]
    }
    return user;
}
export async function removeStaleTokens() {
    console.log("Removing stale tokens...");
    // clear tokens from localStorage if backend tells us the tokens are invalid
    // make the request
    const request = {
        method: 'GET',
        headers: getHeaders()
    };
    await fetch(`/api/users/me`, request)
        .then((response) => {
            // if fetch error then you might be using stale tokens
            if (response.status === 401) {
                window.localStorage.clear();
            }
        }).catch(error => {
            console.log("FETCH ERROR: " + error);
        });
}

export function setLoggedInUserInfo() {
    const request = {
        method: "GET",
        headers: getHeaders()
    }
    const url = BACKEND_HOST_URL + "/api/users/authinfo";
    fetch(url, request)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            window.localStorage.setItem("tsumami_user", JSON.stringify(data));
    });
}

export function checkForLoginTokens(url) {
    // console.log(url);
    // access_token is given back from spring after #
    let parts = url.split("#");
    if(parts.length < 2)
        return false;

    parts = parts[1].split("&");
    let tokens = [];
    for (let i = 0; i < parts.length; i++) {
        const pair = parts[i].split("=");
        if(pair.length > 1 && (pair[0] === "access_token" || pair[0] === "refresh_token"))
            tokens[pair[0]] = pair[1];
    }
    console.log(tokens)
    if(!tokens['access_token'])
        return false;

    setTokens(tokens);
    return true;
}

 */