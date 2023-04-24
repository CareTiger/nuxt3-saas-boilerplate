import _ from "lodash";

export const useSortArticlesByDate = (data: any): any => {
	return _.orderBy(data, ["updatedAt"], ["desc"]);
};

export const useConvertDate = (date: Date) => {
	const newDate = new Date(date);
	return newDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

// TODO move this to a util module
export function useConvertKeysToCamelCase(obj: any): any {
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => useConvertKeysToCamelCase(item));
	}

	const converted: any = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const camelCaseKey = key.replace(/_\w/g, (match) =>
				match[1].toUpperCase()
			);
			converted[camelCaseKey] = useConvertKeysToCamelCase(obj[key]);
		}
	}

	return converted;
}

export function isLessOrEqual(x: number, y: number): boolean {
	return x <= y;
}
// const x = 10;
// const y = 5;
// console.log(isLessOrEqual(x, y)); // true
// const x = 10;
// const y = 15;
// console.log(isLessOrEqual(x, y)); // false
