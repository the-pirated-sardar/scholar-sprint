async function fetchData(prefix, prompt) {

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4-1106-preview",
            messages: [{ "role": "user", "content": prefix + prompt }],
            max_tokens: 100
        })
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await response.json()
        console.log(data)

        return data.choices[0].message.content

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const fetchOptimizedQuery = async (query) => {
    const response = await fetchData(OptimizePrefix, query)
    return response
}

export const fetchSummary = async (item) => {
    const response = await fetchData(SummaryPrefix, item.fullText)
    return response;
}

export const fetchKeywords = async (item) => {
    const response = await fetchData(KeywordPrefix, item.fullText)
    return response
}