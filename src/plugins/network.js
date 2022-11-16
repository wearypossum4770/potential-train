import { useAuth, useBody } from "../utils/security.js";

const signal = new AbortController().signal;

const options = {
  mode: "cors",
  priority: "auto",
  timeout: 1000,
  withCredentials: false,
  maxContentLength: 2000,
  maxBodyLength: 2000,
  signal,
};
const useFetch = async ({ body, method = "GET" }) => {
  const init = {
    ...options,
    method,
    body: useBody({ ...options, body, method }),
  };
  try {
    const resp = await fetch("http://localhost:3009/", init);
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      return data;
    }
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};

const networkPlugin = ({ pinia, app, store, options }) => {};

const body = {
  oldAddress: {
    orderUuid: "44a2ae4f-9882-4a0d-8771-be444f97c3dc",
    addressType: "OLD",
    streetAddress: "13 Joanne Dr Apt 10",
    city: "ashland",
    state: "MA",
    zipCode: "01721",
    urbanizationName: null,
    poBoxNumber: null,
    privateMailbox: null,
    overrideAms: false,
    recentConstruction: false,
  },
  newAddress: {
    orderUuid: "44a2ae4f-9882-4a0d-8771-be444f97c3dc",
    addressType: "NEW",
    streetAddress: "176 LINDEN LOOP",
    city: "POCONO SUMMIT",
    state: "PA",
    zipCode: "18346",
    urbanizationName: null,
    poBoxNumber: null,
    privateMailbox: null,
    overrideAms: false,
    recentConstruction: false,
  },
};
const obj = useFetch({
  body,
  method: "POST",
  ...useAuth({
    headers: { "Content-Type": "application/json" },
    username: "ACCESS_TOKEN_BASE_64",
  }),
});
console.log(obj);
