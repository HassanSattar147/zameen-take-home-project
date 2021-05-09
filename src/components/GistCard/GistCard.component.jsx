import React from 'react'
import ForkCard from "../ForkCard/ForkCard.component"
import FileCard from "../FilesCard/FileCard.component"
import "./gist-card.styles.css"

function GistCard({gistDetails}) {
  const {files, forks} = gistDetails;
  return (
    <div>
      
      <div className="files-container">
        {
          files.map(file => <FileCard fileDetails={file} />)
        }
      </div>
      <div className="forks-container">
        {
          forks.map(fork => <ForkCard forkDetails={fork} />)
        }
      </div>
    </div>
  )
}

export default GistCard
