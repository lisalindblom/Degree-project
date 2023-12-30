export interface IPost {
  id: string;
  presentation_heading: string;
  presentation_text: string;
  thumbnail: string;
  steps: ISteps[];
  materials: string[];
  tags: string;
  level: string;
}

export interface ISteps {
  heading: string;
  text: string;
  is_showing: boolean;
}
