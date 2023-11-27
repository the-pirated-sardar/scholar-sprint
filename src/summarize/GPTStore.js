import { create } from "zustand"

export const useGPTResults = create((set) => ({
    gptSummary: "summary from ChatGPT",
    setGPTSummary: (gptResults) => set({ gptSummary: gptResults }),

    gptKeywords: "keywords from ChatGPT",
    setGPTKeywords: (gptResults) => set({ gptKeywords: gptResults }),
  }))