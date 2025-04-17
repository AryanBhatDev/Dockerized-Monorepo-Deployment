import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

interface IUser{
    username:string;
    password:string;
}


const wss = new WebSocketServer({port:8081});

wss.on('connection',async (socket)=>{
    const user = await client.user.create({
        data:{
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    const userId = user.id;

    socket.send(`hello user ${userId}`)
})