export interface Profile {
  name: string;
  image: string;
  mainUrl: string;
  field: string;
  handsOnCoding: HandsOnCoding[]
  technologies: Technologies[];
  activities: Activity[];
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
