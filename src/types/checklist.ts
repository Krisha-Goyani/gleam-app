export interface ChecklistItem {
  id: string;
  title: string;
  isIncluded: boolean;
  section: 'all-rooms' | 'bathrooms' | 'kitchen' | 'bedrooms' | 'extras';
}

export interface ChecklistSection {
  title: string;
  id: 'all-rooms' | 'bathrooms' | 'kitchen' | 'bedrooms' | 'extras';
  items: ChecklistItem[];
}
