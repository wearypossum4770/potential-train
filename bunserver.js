import postalStates from './src/assets/data/postal_states.json'

const search = ({value="", sovereignty="", label=""}) => postalStates.filter(state=> state.value ===value|| state.sovereignty ===sovereignty ||state.label ===label)
export default {
    port: 3009,
    // certFile: './cert.pem',
    // keyFile: './key.pem',
    // baseURI: "http://localhost:3000",
    development: process.env.NODE_ENV !== "production",
    hostname: "localhost", // defaults to 0.0.0.0
    error: async (err) =>new Response("uh oh! :(" + String(err.toString()), { status: 500 }),
    async fetch(req) {
        console.log(this)
        console.log(`Pending requests count: ${this.pendingRequests}`)
        // const resp = await new Response(req.body).json()
        const url = new URL(req.url) 
        const resp = JSON.stringify(search(Object.fromEntries(url.searchParams.entries())))
        return new Response(resp)
    }
}