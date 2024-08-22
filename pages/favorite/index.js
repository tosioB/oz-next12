import Card from "../../components/Card";

export default function Home({ animals }) {
  return (
    <>
      <ul>
        {animals.map((el) => (
          <Card key={el.id} animal={el} />
        ))}
      </ul>
    </>
  )
}

export async function getServerSideProps() { // 잘 변하는 데이터를 받아올 때
  const res = await fetch("http://localhost:3000/api/favorite/animals");
  const data = await res.json();

  return {
    props: {
      animals: data, // animals라는 이름으로 data를 내보내기
    }
  }
}