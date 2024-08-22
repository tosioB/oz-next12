import { favorites } from "../../../assets/data/data"

export default function handler(req, res) {
  res.status(200).json(favorites)
}
