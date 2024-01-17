import "./StaffBox.css";

export default function StaffBox({ children }) {
  return (
    <div className="team__container-box">
      {children}
    </div>
  );
}
