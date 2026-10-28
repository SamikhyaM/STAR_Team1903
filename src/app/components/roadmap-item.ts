export interface RoadmapItem {
  title: string;
  description: string;
  link: string;
  status: 'completed' | 'in-progress' | 'not started';
}
