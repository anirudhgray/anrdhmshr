export interface Experience {
  start: string;
  end: string;
  organisation: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface ExperienceData {
  volunteering: Experience[];
  experience: Experience[];
}
