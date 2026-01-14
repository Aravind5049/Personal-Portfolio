'use client'

export default function Navigation() {
  return (
    <>
      <a href="#" className="resumo_fn_nav_overlay"></a>
      <div className="resumo_fn_navigation">
        <a href="#" className="closer"></a>
        
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#news">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          
          <div className="nav_footer">
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/aravind-kanaparthi-515421bb/" target="_blank" rel="noopener noreferrer">
                    <img src="/svg/social/linkedin.svg" alt="LinkedIn" className="fn__svg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/aravindkanapar" target="_blank" rel="noopener noreferrer">
                    <img src="/svg/social/behance.svg" alt="Behance" className="fn__svg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/geek.percept?igsh=MWk2N3phenVvMTZ3aQ==" target="_blank" rel="noopener noreferrer">
                    <img src="/svg/social/instagram.svg" alt="Instagram" className="fn__svg" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/svg/social/facebook.svg" alt="Facebook" className="fn__svg" />
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/MinimalMindframe" target="_blank" rel="noopener noreferrer">
                    <img src="/svg/social/dribbble.svg" alt="Dribbble" className="fn__svg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <a href="#" target="_blank" rel="noopener noreferrer">Developed by Aravind</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
