import React, { useState } from "react";
import "./file-card.styles.css";

function FileCard({ fileDetails }) {
  const { filename, type, language, content } = fileDetails;
  const [isContentVisible, setIsContentVisible] = useState(false);
  return (
    <div>
      <div className="file-card">
        <p>{filename}</p>
        <p>{type}</p>
        <p>{language}</p>
        <button onClick={() => setIsContentVisible(!isContentVisible)}>
          {isContentVisible ? "Hide " : "Show "} Content
        </button>
        {isContentVisible && <p className="line-break-class">{convertIntoHtmlText(content)}</p>}
      </div>
    </div>
  );
}

// helper functions
// let text = "class StoredProcedureService\n\n  def self.instance\n    @instance ||= StoredProcedureService.new\n  end\n\n  def execute(name, *args)\n    results = []\n    begin\n      connection.execute(\"CALL #{name}(#{args.join(',')})\").each(as: :hash, symbolize_keys: true) do |row|\n        results << OpenStruct.new(row)\n      end\n    ensure\n      connection.close\n    end\n    results\n  end\n\n  def connection\n    ActiveRecord::Base.connection\n  end\nend"

const convertIntoHtmlText = (text) =>
  text.replace(/ /g, "\u00A0");

export default FileCard;
