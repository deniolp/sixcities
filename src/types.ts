interface Location {
  latitude: number
  longitude: number,
  zoom: number
}

export interface City {
  name: string,
  location: Location
}

interface Host {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
}

export interface Place {
  city: City,
  image: string,
  images: Array<string>,
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number
  maxAdults: number,
  price: number,
  goods: Array<string>,
  host: Host,
  description: string,
  location: Location,
  id: number,
  distance?: number
}

export interface User {
  id: number,
  email: string,
  name: string,
  avatar_url: string,
  is_pro: boolean
}

export interface Review {
  id: number,
  user: Host,
  rating: number,
  comment: string,
  datetime: string
}
