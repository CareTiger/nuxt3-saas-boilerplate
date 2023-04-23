export default function convertKeysToCamelCase(obj: any): any {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => convertKeysToCamelCase(item));
	}

	const converted: any = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const camelCaseKey = key.replace(/_\w/g, (match) =>
				match[1].toUpperCase()
			);
			converted[camelCaseKey] = convertKeysToCamelCase(obj[key]);
		}
	}

	return converted;
}
