import React from "react";
import "./App.css";
import Mockman from "../lib/main";
import logo from "./assets/Logo-only.png";
import { MdiGithub } from "./assets/svgs/GithubLogo";
import { MdiNpm } from "./assets/svgs/NpmLogo";
function App() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="hero">
          <img src={logo} alt="mockman logo" width={300} height={300} />
          <div className="hero__content">
            <span className="hero__content-header">MockmanJS</span>
            <div className="hero__content-CTA">
              <span>
                {" "}
                <code>yarn add mockman-js</code>
              </span>
              <a
                href="https://github.com/neogcamp/mockman"
                target="_blank"
                className="github-logo"
              >
                <MdiGithub />
              </a>
              <a
                href="https://www.npmjs.com/package/mockman-js"
                className="npm-logo"
              >
                <MdiNpm />
              </a>
            </div>
          </div>
        </div>

        <div className="mockmanjs">
          <Mockman colorScheme="dark" />
          <div className="guidelines">
            <p>
              To test the above TODO-app, you can find it's mock-API
              documentation{" "}
              <a target="_blank" rel="noopener noreferrer" href="soham.com">
                here
              </a>
            </p>
          </div>
        </div>
        <div className="mobile-view">
          <p>
            This site isn't yet optimized for mobile view. Open in website to
            see Live Mockman example!{" "}
          </p>
        </div>
      </div>
      <div className="footer">Copyright © 2022 neoG camp</div>
    </div>
  );
}

export default App;
