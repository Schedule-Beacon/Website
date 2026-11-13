export type Department = "Technical" | "Sales" | "Marketing" | "Customer Experience";
export type Commitment = "Full-time" | "Part-time";
export type LocationType = "Remote" | "Hybrid" | "On-site";

export interface JobSection {
  heading: string;
  items: string[];
}

export interface OpenRole {
  slug: string;
  title: string;
  postingPath: string;
  applyPath: string;
  company: string;
  department: Department;
  commitment: Commitment;
  locationType: LocationType;
  location: string;
  hours: string;
  compensation: string;
  intro: string;
  sections: JobSection[];
}

export const DEPARTMENTS: Department[] = ["Technical", "Sales", "Marketing", "Customer Experience"];
export const COMMITMENTS: Commitment[] = ["Full-time", "Part-time"];
export const LOCATION_TYPES: LocationType[] = ["Remote", "Hybrid", "On-site"];

// No open positions right now. Add a role object here to list it on the Careers page.
export const openRoles: OpenRole[] = [];
