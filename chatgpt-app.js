const API_KEY = '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';

const prefix1 = "I want to optimize the search query sent to CORE API to fetch research, for which I have made a natural language prompt. " 
            + "So I want you to reply with only an expanded prompt to be sent to CORE API and nothing else at all. "
            + "The natural language prompt is as follows: ";



const submitButton = document.querySelector('#submit'); // HTML section with id="submit" will trigger the function when clicked
const inputElement = document.querySelector('input'); // HTML input section will be the input for the function. Assumed only one input element exists



fullPrompt1 = prefix1 + inputElement.value;

async function fetchData() {
    console.log("Fetching data...");
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4-1106-preview",
            messages: [{ "role": "user", "content": fullPrompt1 }],
            max_tokens: 100
        })
    };
    try{
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await response.json();
        console.log(data);
    }catch (error){ 
        console.error('Error fetching data:', error); 

    }
}

submitButton.addEventListener('click', fetchData); // When the submit button is clicked, run the fetchData function