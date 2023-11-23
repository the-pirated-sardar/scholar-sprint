// const API_KEY = "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"
// const API_KEY = "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";
// console.log(API_KEY);
// async function fetchData() {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//             Authorization: 'Bearer $API_KEY',
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             model: "gpt-4-1106-preview",
//             prompt: "Say this a test.",
//             max_tokens: 7
//         })
//     })
//     const data = await response.json()
//     console.log(data)
// }

const API_KEY = "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";
async function fetchData() {
    try {
        const requestBody = JSON.stringify({
            model: "gpt-4-1106-preview",
            messages: [{ "role": "user", "content": "Say this is a test." }],
            max_tokens: 7
        });

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: requestBody
        });

        if (!response.ok) {
            console.error('API request failed:', response.status, response.statusText);
            console.error('Request body:', requestBody);
            const errorResponse = await response.text();
            console.error('Error response:', errorResponse);
            return;
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



fetchData();

// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer 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" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0,
//      max_tokens: 7
//    }'