import { data, favorites } from "../../../../assets/data/data"

export default function handler(req, res) {
  const favoriteAnimals = data.filter(animal => favorites.includes(animal.id))
  res.status(200).json(favoriteAnimals)
}
