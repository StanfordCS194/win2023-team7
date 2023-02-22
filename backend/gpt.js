// ToDo create the fetch calls to the API for gpt3
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-JBDXeb5Q0sQ1q838uuYF3AVL",
    apiKey: "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"

});

const openai = new OpenAIApi(configuration);
const response = await openai.retrieveModel("text-davinci-003");