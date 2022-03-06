// Discord RPC status made for @Certified_Rice
// Fork the repo and edit the properties how ever you wish!
// MIT License 

const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Programmer, Gamer, Anime watcher, game developer",
        state: "Vietnamese boi",
        largeImageKey: "smol_eyes",
        largeImageText: "Certified Rice is vietnamese",
        smallImageKey: "cot",
        smallImageText: "big floppa",

    })

    console.log("RPC active");
})

rpc.login({
    clientId: "949827465746980864"
})