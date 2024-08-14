import sectionBg from "../../assets/images/more/15.jpg";
import topLogo from "../../assets/images/more/logo1.png";
const TopLogoSection = () => {
  return (
    <div style={{ backgroundImage: `url(${sectionBg})` }}>
      <div className="flex items-center justify-center gap-5">
        <img className="w-16 h-20" src={topLogo} alt="" />
        <p className="font-rancho text-white  text-5xl py-3">
          Espresso Emporium
        </p>
      </div>
    </div>
  );
};

export default TopLogoSection;
