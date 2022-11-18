import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    dispatch(changeColor(true));
  };

  const [theme, setTheme] = useState("light");

  const changeColor = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  console.log(theme);
  return (
    <div className="toggle">
      <h5>{theme + ' mode'}</h5>
      <Switch onChange={handleChange} checked={checked}></Switch>
    </div>
  );
}

export default ChangeColor;
