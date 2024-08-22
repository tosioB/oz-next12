import Link from "next/link";

export default function Header() {

  return (
      <header>
        <h1>💚 동물 조아 💚</h1>
        <nav>
          <Link href='/'>메인</Link>
          <Link href='/favorite'>찜목록</Link>
        </nav>
      </header>
  )
}