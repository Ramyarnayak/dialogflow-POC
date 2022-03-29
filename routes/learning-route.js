const chatbot = require('../chatbot/chatbot')

module.exports = app =>{
    app.post('/text_query', async (req,res)=>{
        console.log(req)
        const {text, userId} = req.body;
        const resultQuery = await chatbot.textQuery(text,userId)
  
        res.send("text query")
    })

    // app.post('/event_query',(req,res)=>{
    //     console.log(req)
    //     res.send("event query")
    // })
}