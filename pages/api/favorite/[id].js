import { favorites } from "../../../assets/data/data"

export default function handler(req, res) {
  const animalId = Number(req.query.id);

  // reg.method - // get, post, delete, patch, put
  if (req.method === "POST") {
    // 찜 목록에 추가
    favorites.push(animalId)
    res.send(animalId)
  } else if (req.method === "DELETE") {
    // 찜 목록에서 삭제
    const idx = favorites.indexOf(animalId)
    favorites.splice(idx, 1)
    res.send(animalId)
  } else {
    res.status(404).json("wrong http method");
  }
}