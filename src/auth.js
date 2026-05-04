export function initGoogleSignIn(clientId, callback) {
  /* global google */
  google.accounts.id.initialize({
    client_id: clientId,
    callback: (response) => {
      const payload = decodeJwt(response.credential)
      callback(payload)
    }
  })
}

export function renderGoogleButton() {
  /* global google */
  google.accounts.id.renderButton(
    document.getElementById("google-signin"),
    {
      theme: "filled_blue",
      size: "large",
      width: 260
    }
  )
}

function decodeJwt(token) {
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  )
  return JSON.parse(jsonPayload)
}
