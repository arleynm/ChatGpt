const InputPrompt = require("../model/input-model");
const openai =require("../config/openai");


module.exports ={
    async sendText(request,response){
        const openaiIa = openai.configuration();
        const inpuModel = new InputPrompt(request.body);

        try {
            const response = await openaiIa.createCompletion(
                openai.textCompletation(inpuModel)
            );

            return response.status(200).json(
                {
                    sucess: true,
                    data: response.data.choices[0].text
                }
                    
            );
        } catch (error) {
            return response.status(400).json(
                {
                    sucess: false,
                    error: error.response ? error.data.response : 'tem erro no servidor'
                }
            )
        }
        
        
    }
}