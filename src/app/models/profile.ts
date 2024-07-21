export interface Profile {
  name: string;
  image: string;
  mainUrl: string;
  field: string;
  handsOnCoding: HandsOnCoding[]
  openSource?: OpenSource[];
  technologies: Technologies[];
  activities: Activity[];
}

export interface OpenSource {
  involvementType: string;
  contributionType: string;
  leadDeveloper: boolean;
}

export interface HandsOnCoding {
  status: boolean;
  inRealTime: boolean;
  platform: string;
}

export interface Technologies {
  name: string;
  icon: string;
}

export interface Activity {
  name: string;
  icon: string;
}
