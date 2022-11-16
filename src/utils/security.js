export const createCredential = async ({
  protocol = null,
  provider = "https://account.google.com",
  username: name,
  password,
  iconURL = "https://cdn.auth0.com/styleguide/components/2.0.2/media/logos/img/favicon.png",
  id,
}) => {
  const obj = { created: false };

  const credential = password ? "PasswordCredential" : "FederatedCredential";
  await navigator.credentials
    .store(
      new this[credential]({
        id,
        password,
        protocol,
        name,
        provider,
        iconURL,
      })
    )
    .then((/** undefined */) =>
      Object.assign(obj, {
        created: true,
        credentialType: credential,
        message: "user created!!!",
      }))
    .catch((err) => err);
  return obj;
};
export const methods = new Set(["GET", "HEAD"]);
export const useBody = ({ method, body = {} }) =>
  methods.has(method) ? null : JSON.stringify(body);
export const useAuth = ({
  headers,
  username,
  password,
  token,
  authToken,
  accessToken,
  iconURL = null,
}) => {
  if (token || authToken || accessToken) {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token || authToken || accessToken}`,
      },
    };
  }
  createCredential({ username, password, iconURL });
  return { headers, username };
};
