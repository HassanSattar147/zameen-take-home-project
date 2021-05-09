import React, { useState } from "react";
import "./file-card.styles.css";

function FileCard({ fileDetails }) {
  const { filename, type, language, content } = fileDetails;
  const [isContentVisible, setIsContentVisible] = useState(false);
  return (
    <div>
      <div className="file-card">
        <div className="file-style-row">
          <p>
            File Name: <span className="code">{filename}</span>
          </p>
          <p className="file-type-badge code">{type}</p>
        </div>
        <div className="file-style-row">
          <p>
            Language: <span className="code">{language}</span>
          </p>
          <button
            className="file-content-toggle-button"
            onClick={() => setIsContentVisible(!isContentVisible)}
          >
            {isContentVisible ? "Hide " : "Show "} Content
          </button>
        </div>

        {isContentVisible &&
          (<div className="file-content">
            <p className="line-break-class code">
              {convertIntoHtmlText(content)}
            </p>
          </div>)
        }

        {/* {isContentVisible && (
          <div className="file-content">
            <p className="line-break-class code">
              {convertIntoHtmlText(content)}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}

// helper functions
// let text = "class StoredProcedureService\n\n  def self.instance\n    @instance ||= StoredProcedureService.new\n  end\n\n  def execute(name, *args)\n    results = []\n    begin\n      connection.execute(\"CALL #{name}(#{args.join(',')})\").each(as: :hash, symbolize_keys: true) do |row|\n        results << OpenStruct.new(row)\n      end\n    ensure\n      connection.close\n    end\n    results\n  end\n\n  def connection\n    ActiveRecord::Base.connection\n  end\nend"

const convertIntoHtmlText = (text) => text.replace(/ /g, "\u00A0");

export default FileCard;
