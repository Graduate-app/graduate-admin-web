import { IGraduate } from "@/api/graduate";

export interface IFilterProps {
  search: string;
  status: 'pending' | 'applied' | 'rejected' | '';
  degree: 'bachelor' | 'magister' | 'aspirant' | '';
  enrollmentYear: number | null;
  graduationYear: number | null;
}
const handleGraduateFilter = (data: IGraduate[], filterProps: IFilterProps) => {
  let filteredData = data;

  if (filterProps.search.length > 0) {
    const searchQuery = filterProps.search.toLowerCase();

    filteredData = data
      .map((graduate) => {
        const fullName = `${graduate.firstName} ${graduate.lastName} ${graduate.patronymic}`.toLowerCase();

        const score = getSimilarityScore(fullName, searchQuery);

        return { graduate, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ graduate }) => graduate);
  }

  if (filterProps.status.length > 0) {
    filteredData = filteredData.filter((graduate) => graduate.status === filterProps.status);
  }

  if (filterProps.degree.length > 0) {
    filteredData = filteredData.filter((graduate) => graduate.degree.some((degree) => degree.degree === filterProps.degree));
  }

  if (filterProps.enrollmentYear) {
    filteredData = filteredData.filter((graduate) => graduate.degree.some((degree) => degree.enrollmentYear === filterProps.enrollmentYear));
  }

  if (filterProps.graduationYear) {
    filteredData = filteredData.filter((graduate) => graduate.degree.some((degree) => degree.graduationYear === filterProps.graduationYear));
  }

  return filteredData;
};

const getSimilarityScore = (str1: string, str2: string): number => {
  const levenshteinDistance = (a: string, b: string): number => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const matrix = Array.from({ length: a.length + 1 }, (_, _i) => Array(b.length + 1).fill(0));

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // Deletion
          matrix[i][j - 1] + 1, // Insertion
          matrix[i - 1][j - 1] + cost // Substitution
        );
      }
    }

    return matrix[a.length][b.length];
  };

  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1; // If both strings are empty, they're identical

  const distance = levenshteinDistance(str1, str2);
  return (maxLength - distance) / maxLength; // Normalized similarity score (0 to 1)
};


export default handleGraduateFilter;