import FavoriteButton from "../../components/FavoriteButton";

function Detail({ animalData }) {
  return (
    <section className="detail">
      <img src={animalData?.img.src} /> {/* ?를 사용해서 데이터가 있으면 값을 가지고온다.*/}
      <h2>
        {animalData?.name}
        <FavoriteButton animalId={animalData.id} />
      </h2>
      <div>{animalData?.description}</div>
    </section>
  );
}

export default Detail;

// getStaticProps - 잘 변하지 않는 데이터를 받아올 때
// getStaticPaths - 잘 변하지 않는 데이터를 받아오지만, 동적 라우팅이 필요할 때
// getServerSideProps - 잘 변하는 데이터를 받아올 때

export async function getStaticPaths() { // 잘 변하지 않는 데이터를 받아오지만, 동적 라우팅이 필요할 때
  return {
    paths: [
      { params: {id: '0'} } // params에 0이라는 id가 들어오면 정적인 페이지를 만들어서 사용하겠다.
    ],
    fallback: true
    /** fallback
     * false - path에서 { params: {id: '0'}는 정적으로 사용하고 나머지 id는 접근 못하게한다.
     * true - path에서 { params: {id: '0'}는 정적으로 사용하고 나머지는 요청이 들어오면 서버에서 만들어 사용 즉 서버 사이드 렌더링을 사용하겠다.
     */
  }
}

export async function getStaticProps(context) { // 잘 변하지 않는 데이터를 받아올 때
  const animalId = context.params.id;
  const res = await fetch(`http://localhost:3000/api/animal/${animalId}`);
  const data = await res.json();

  return {
    props: {
      animalData: data, // animalData라는 이름으로 data를 내보내기
    }
  }
}