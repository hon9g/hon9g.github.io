import React, { useEffect } from 'react'

export default ({ repo }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo,
      'issue-term': 'pathname',
      branch: 'master',
      label: `✨💬✨comments`,
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    }
    for (const [configKey, configVal] of Object.entries(utterancesConfig)) {
      utterances.setAttribute(configKey, configVal)
    }
    rootElm.current.appendChild(utterances)
  }, [repo, rootElm])

  return <div className="utterances" ref={rootElm} />
}
