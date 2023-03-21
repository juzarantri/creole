//// JWT secret
export const constants = {
  secret: 'lokeshkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
};

/// User roles
export enum Role {
  USER = 'user',
  AUTHOR = 'author',
  ADMIN = 'admin',
}

/// Books genre
export enum GenreType {
  NOVEL = 'novel',
  ACTION = 'action',
  SCIFI = 'scifi',
  ROMANCE = 'romance',
  THRILLER = 'thriller',
  HORROR = 'horror',
  DRAMA = 'drama',
  AUTOBIOGRAPHY = 'autobiography',
  MYSTERY = 'mystery',
  CRIME = 'crime',
  JOURNAL = 'journal',
}

/// Currencies
export enum Currency {
  INR = 'inr',
  USD = 'usd',
  GBP = 'gbp',
}
