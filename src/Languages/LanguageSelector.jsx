import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

function LanguageSelect() {
  const [language, setLanguage] = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      className="p-2 m-2 rounded"
      value={language}
      onChange={handleChange}
    >
      <option value="en">English</option>
      <option value="ar-AE">Arabic</option>
      <option value="fr-FR">French</option>
    </select>
  );
}
export default LanguageSelect;
