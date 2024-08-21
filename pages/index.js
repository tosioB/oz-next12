import Card from "../components/Card";

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

export async function getStaticProps() { // 잘 변하지 않는 데이터를 받아올 때
  const res = await fetch("http://localhost:3000/api/animal");
  const data = await res.json();

  return {
    props: {
      animals: data, // animals라는 이름으로 data를 내보내기
    }
  }
}

/**
 * pages폴더 안에 next.js가 정해놓은 규칙대로 폴더와 파일을 생성하면 
 * 여러개의 페이지를 쉽게 생성할 수 있다.
 */

// pages/api - 서버를 개발할 수 있는 폴더

// getStaticProps - 잘 변하지 않는 데이터를 받아올 때
// getStaticPaths - 잘 변하지 않는 데이터를 받아오지만, 동적 라우팅이 필요할 때
// getServerSideProps - 잘 변하는 데이터를 받아올 때