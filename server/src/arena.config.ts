import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";
import { GameRoom } from "./rooms/GameRoom";
import { GAME_ROOM_NAME } from "shared";


export default Arena({
    getId: () => "Simple games made with BabylonJS and Colyseus ",

    initializeGameServer: (gameServer) => {
        gameServer.define(GAME_ROOM_NAME, GameRoom);
    },

    initializeExpress: (app) => {
        app.get("/", (req, res) => {
            res.send("Server ready!");
        });

        app.use("/colyseus", monitor());
    },

    beforeListen: () => {
    }
});
