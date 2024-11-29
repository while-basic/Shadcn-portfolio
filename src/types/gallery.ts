export interface Photo {
  id: string;
  title: string;
  description?: string;
  src: string;
  category: string;
  date?: string;
  aspectRatio?: number;
  downloadUrl?: string;
  link?: string;
  tags?: string[];
  location?: string;
  metadata?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutterSpeed?: string;
    iso?: number;
  };
}
