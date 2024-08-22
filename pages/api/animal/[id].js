import { data } from "../../../assets/data/data"

export default function handler(req, res) {
  const animalId = Number(req.query.id);
  const animal = data.find(animal => animal.id === animalId);

  if (animal) {
    res.status(200).json(animal);
  } else {
    res.status(404).send("no data");
  }
}