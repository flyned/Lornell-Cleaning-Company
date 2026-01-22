
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  location: string;
  content: string;
  rating: number;
}

export interface QuoteRequest {
  squareFootage: number;
  frequency: string;
  serviceType: string;
  location: string;
}
