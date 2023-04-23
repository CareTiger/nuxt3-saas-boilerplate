import _ from "lodash";

export const useSortArticlesByDate = (data) => {
    return _.orderBy(data, ["updatedAt"], ["desc"]);
};

export const useConvertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
