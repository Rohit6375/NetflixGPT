import { GoogleGenAI } from "@google/genai";
import { GEMINIAI_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEMINIAI_KEY});

export default ai;
