// TODO create the fetch calls to the API for DALL-E

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-JBDXeb5Q0sQ1q838uuYF3AVL",
    apiKey: "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"

});

const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
    prompt: "a smiley face",
    n: 1,
    size: "1024x1024"
});

image_url = response.data.data[0].url;