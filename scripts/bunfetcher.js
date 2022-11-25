const url = new URL("http://localhost:3009/");
url.searchParams.set("value", "TN");
async function main() {
  const resp = await fetch(url, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify({ message: "Who are you" }),
  });
  if (resp.ok) {
    const data = await resp.json();
    console.log(data);
  }
}

main();
