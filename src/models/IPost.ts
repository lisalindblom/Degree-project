export interface IPost {
  id: string;
  thumbnail: string;
  recommended_tools: string[];
  presentation_heading: string;
  presentation_text: string;
  steps: ISteps[];
  category: string;
  level: string;
  material: string;
  tools: string;
}

export interface ISteps {
  heading: string;
  image: string;
  text: string;
  is_showing: boolean;
}

export interface INewPost {
  thumbnail: string;
  recommended_tools: string[];
  presentation_heading: string;
  presentation_text: string;
  steps: ISteps[];
  category: string;
  level: string;
  material: string;
  tools: string;
}
