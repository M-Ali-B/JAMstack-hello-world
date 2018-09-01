import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Hi This is me , <b>Ali</b> .Its my first time for being acting as a candidate for a HAckathon in U.S.</p>
    <p>I also applied to the JAMstack hello world hackathon</p>
    <p>I am also a university student </p>

<h2>How to Push changes in my code to be visible at domain</h2>
<ol>
<li>Commit stage or unstage changes via VS code</li>
<li>git push origin master</li>
<li><code>gatsby build</code>on terminal</li>

</ol>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
