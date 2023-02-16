import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

const BarVertical = ({ options, ...props }) => {
  options.indexAxis = "x";
  // This effect makes canvas responsive
  useEffect(() => {
    const bar = document.getElementById("Bar");
    const listener = window.addEventListener("resize", () => {
      bar.style.width = "100%";
      bar.style.height = "100%";
    });
    return () => window.removeEventListener("resize", listener);
  }, []);
  return <Bar id="Bar" options={options} {...props} />;
};

export default BarVertical;
