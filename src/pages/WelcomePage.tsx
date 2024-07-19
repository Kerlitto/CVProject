import personalPhoto from "../assets/personalPhoto/ja.png";

const WelcomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-6 flex flex-col gap-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className=" md:w-[50%] h-[800px] flex items-center justify-center">
            <img
              src={personalPhoto}
              className="aspect-square object-cover object-left-top rounded-full h-[500px]"
            />
          </div>
          <div className="text-xl  md:w-[50%]">
            <p className="text-2xl font-semibold text-foreground mb-2">
              Welcome to my portfolio!
            </p>
            <p className="mb-2">
              My name is Maciej Kozak, and I am an experienced IT specialist and
              videographer.{" "}
            </p>
            <p className="mb-2">
              For over a decade, I have been working at{" "}
              <span className="text-primary">
                <span className="font-semibold">TELECHEM Sp. z o.o.</span>
              </span>{" "}
              , where I initially focused on telecommunications and
              teleinformatics.{" "}
            </p>
            <p className="mb-2">
              Currently, I serve as an IT Administrator, managing IT
              infrastructure, providing technical support, ensuring
              cybersecurity, and developing and managing websites.{" "}
            </p>
            <p className="mb-2">
              Simultaneously, since 2017, I have been pursuing my passion for
              filmmaking at{" "}
              <span className="text-primary">
                <span className="font-semibold">TC Video</span>
              </span>
              , where I handle film production for various events.{" "}
            </p>
            <p className="mb-2">
              My skills include comprehensive audiovisual production, drone and
              camera operation, video editing, and managing teams of camera
              operators.
            </p>{" "}
            <p className="mb-2">
              In my daily work, I prioritize communication, teamwork, and
              problem-solving. My technical skills include JavaScript, CSS,
              React, Git, and Typescript. I am fluent in English, which enables
              effective international collaboration.{" "}
            </p>
            <p className="mb-2">
              I warmly invite you to contact me and explore potential
              collaborations!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
