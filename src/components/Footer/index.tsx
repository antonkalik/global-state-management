import { useSelector } from "../../store";

export const Footer = () => {
  const status = useSelector((state) => state.status);
  console.log("Footer updated");

  return (
    <div className="footer">
      <p>Footer</p>
      <p>Status: {status}</p>
    </div>
  );
};
