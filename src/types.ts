export type ThemeMode = 'dark' | 'light';

export type AppPage = 'home' | 'services' | 'about' | 'gallery' | 'booking' | 'reviews' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircut' | 'shave' | 'combo' | 'specialty';
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface BarberProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  avatarUrl: string;
  instagram?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'beards' | 'waves' | 'art';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  barberName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  verified: boolean;
}

export interface BookingFormData {
  serviceId: string;
  barberId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
