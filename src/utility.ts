export function safeJsonParse<T>(jsonString?: string | null): T | null {
    if (!jsonString) return null;

    try {
        return JSON.parse(jsonString) as T;
    } catch (error) {
        console.error(`Error parsing JSON:`, error);
        return null;
    }
}
