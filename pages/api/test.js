// http://localhost:3000/api/test

export default function handler(req, res) {
  res.status(200).json({ test: '테스트중...' })
}
