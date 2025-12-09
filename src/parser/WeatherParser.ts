var fs = require("fs");

const normalizeKey = (key: string): string => {
  return key.trim().replace(/\s+/g, "").replace("Km/h", "KmH");
};

const parseValue = (value: string): string | number | null => {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  if (!isNaN(Number(trimmed))) return Number(trimmed);
  return trimmed;
};

const dataParser = (filePath: string): object[] | undefined => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content
      .split(/\n/)
      .filter((line: string) => line.trim() !== "");

    let rows: string[][] = lines.map((line: string) => line.split(","));

    let keys = rows.shift();
    if (!keys) throw new Error("Keys row missing in file.");

    const normalizedKeys: string[] = keys.map(normalizeKey);

    const formatted = rows.map((rowArr) => {
      let obj: any = {};
      rowArr.forEach((item, index) => {
        const key = normalizedKeys[index];
        if (key) obj[key] = parseValue(item);
      });
      return obj;
    });
    return formatted;
  } catch (err) {
    console.error("Error reading file:", err);
    return;
  }
};

module.exports = dataParser;
