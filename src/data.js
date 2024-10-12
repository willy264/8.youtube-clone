export const API_KEY = 'AIzaSyBGraZw7PR4MUXdLgLsZH0W6qvnAIb_-OQ';

export const value_converter = (value) => {
  if (value >= 10000000) {
    return Math.floor(value/10000000) + 'M'
  } else if (value >= 1000) {
    return Math.floor(value/1000) + 'K'
  } else {
    return value
  }
}