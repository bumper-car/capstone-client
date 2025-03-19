import NavBar from "../components/NavBar"
import "../styles/MainPage.css"
import { FiSearch } from "react-icons/fi"

function MainPage() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="main-content">
        <h2>
          <span className="highlight">댓글에서 시작하는</span> <br />
          똑똑한 <span className="highlight-yellow">소비</span>
        </h2>
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>
            <FiSearch size={20} />
          </button>
        </div>
        <p className="scroll-text">아래로 내려서 사용법 알아보기</p>
      </div>
    </div>
  )
}

export default MainPage
