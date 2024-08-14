import awesomeAroma from "../../../../assets/images/icons/1.png";
import highQuality from "../../../../assets/images/icons/2.png";
import pureGrades from "../../../../assets/images/icons/3.png";
import properRoasting from "../../../../assets/images/icons/4.png";
const Features = () => {
  return (
    <div className=" bg-primary-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center py-20 gap-5 max-w-7xl mx-auto">
        <div className="space-y-3">
          <img className="mx-auto" src={awesomeAroma} alt="" />
          <h1 className="font-rancho text-center text-4xl font-semibold">
            Awesome Aroma
          </h1>
          <p className="w-[90%] mx-auto text-center">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div className="space-y-3">
          <img className="mx-auto" src={highQuality} alt="" />
          <h1 className="font-rancho text-center text-4xl font-semibold">
            High Quality
          </h1>
          <p className="w-[90%] mx-auto text-center">
            We served the coffee to you maintaining the best quality
          </p>
        </div>

        <div className="space-y-3">
          <img className="mx-auto" src={pureGrades} alt="" />
          <h1 className="font-rancho text-center text-4xl font-semibold">
            Pure Grades
          </h1>
          <p className="w-[90%] mx-auto text-center">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        <div className="space-y-3">
          <img className="mx-auto" src={properRoasting} alt="" />
          <h1 className="font-rancho text-center text-4xl font-semibold">
            Proper Roasting
          </h1>
          <p className="w-[90%] mx-auto text-center">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
