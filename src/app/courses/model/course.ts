import { Lesson } from "./lesson";

export interface Course {
  _id: any;
  name: string;
  category: string;
  lessons: Lesson[];
}
