import profileImg from '../../assets/profile.JPG';
import './Header.css';

export default function Header() {
  const summary = 
  "After three years in the automotive industry, I decided to follow my long-time \
  interest in technology and transition into Java software development. Through \
  self-study and taking courses, I’ve built a fundamental in core Java, \
  object-oriented programming, and algorithms.";   

  return (
    <header className="page-header">
      <div className="container">
        <div className="header-top flex-responsive">
          <img className="profile" src={profileImg} />
          <h1>THANAPONG  YOOYEN</h1>
          <h2>Java Software Engineer</h2>

          <address>
            <ul className="inline-list flex-reponsiv">
              <li>
                <a href="mailto:malethanapong@gmail.com">malethanapong@gmail.com</a>
              </li>
              
              <li>091-4321990</li>

              <li>
                <a href="">MaleTNP/thanapongyooyen.github.io</a>
              </li>

              <li>Bangkok, Thailand</li>

            </ul>
          </address>
          <p className="header-summary">{summary}</p>
        </div>
      </div>
    </header>
  )
}