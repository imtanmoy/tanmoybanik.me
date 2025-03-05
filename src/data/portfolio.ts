import portfolioJson from "./portfolio.json";

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  githubLink?: string;
}

export interface Award {
  title: string;
  organization: string;
  description: string;
  year: string;
  logo?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface PortfolioData {
  about: string[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  awards: Award[];
  certificates: Certificate[];
}

// Utility function to check if an object has required properties
const hasRequiredProperties = <T>(
  obj: unknown,
  requiredProps: (keyof T)[]
): obj is T => {
  return requiredProps.every(
    (prop) =>
      typeof obj === "object" &&
      obj !== null &&
      prop in obj &&
      obj[prop as keyof object] !== undefined
  );
};

// Deep validation of portfolio data
const validatePortfolioData = (data: unknown): PortfolioData => {
  // First check if the main structure exists
  if (!data || typeof data !== "object" || data === null) {
    throw new Error("Portfolio data must be an object");
  }

  // Type guard for the main object
  const hasMainSections = hasRequiredProperties<PortfolioData>(data, [
    "about",
    "experiences",
    "education",
    "projects",
    "awards",
    "certificates",
  ]);

  if (!hasMainSections) {
    throw new Error("Portfolio data is missing required sections");
  }

  // Check if all required sections exist as arrays
  if (
    !Array.isArray(data.about) ||
    !Array.isArray(data.experiences) ||
    !Array.isArray(data.education) ||
    !Array.isArray(data.projects) ||
    !Array.isArray(data.awards) ||
    !Array.isArray(data.certificates)
  ) {
    throw new Error("All portfolio sections must be arrays");
  }

  // Validate experiences
  data.experiences.forEach((exp, index) => {
    const requiredProps: (keyof Experience)[] = [
      "position",
      "company",
      "location",
      "startDate",
      "endDate",
      "highlights",
      "technologies",
    ];
    if (!hasRequiredProperties<Experience>(exp, requiredProps)) {
      throw new Error(
        `Experience at index ${index} is missing required properties`
      );
    }
    if (!Array.isArray(exp.highlights) || !Array.isArray(exp.technologies)) {
      throw new Error(
        `Experience at index ${index} must have highlights and technologies as arrays`
      );
    }
  });

  // Validate education
  data.education.forEach((edu, index) => {
    const requiredProps: (keyof Education)[] = [
      "degree",
      "institution",
      "year",
      "location",
    ];
    if (!hasRequiredProperties<Education>(edu, requiredProps)) {
      throw new Error(
        `Education at index ${index} is missing required properties`
      );
    }
  });

  // Validate projects
  data.projects.forEach((proj, index) => {
    const requiredProps: (keyof Project)[] = [
      "title",
      "description",
      "technologies",
    ];
    if (!hasRequiredProperties<Project>(proj, requiredProps)) {
      throw new Error(
        `Project at index ${index} is missing required properties`
      );
    }
    if (!Array.isArray(proj.technologies)) {
      throw new Error(
        `Project at index ${index} must have technologies as an array`
      );
    }
  });

  // Validate awards
  data.awards.forEach((award, index) => {
    const requiredProps: (keyof Award)[] = [
      "title",
      "organization",
      "description",
      "year",
    ];
    if (!hasRequiredProperties<Award>(award, requiredProps)) {
      throw new Error(`Award at index ${index} is missing required properties`);
    }
  });

  // Validate certifications
  data.certificates.forEach((cert, index) => {
    const requiredProps: (keyof Certificate)[] = ["name", "issuer"];
    if (!hasRequiredProperties<Certificate>(cert, requiredProps)) {
      throw new Error(
        `Certification at index ${index} is missing required properties`
      );
    }
  });

  return data;
};

export const portfolioData = validatePortfolioData(portfolioJson);
