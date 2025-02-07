import personalPhoto from "../assets/personalPhoto/ja.png";

const WelcomePage = () => {
  return (
    <>
      <div className="flex items-center container mx-auto ">
        <section className="flex flex-col h-[calc(100vh-73px)] overflow-auto gap-8 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className=" md:w-[50%] my-6">
            <img
              src={personalPhoto}
              className="rounded-full max-h-[500px] mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-xl mx-auto text-muted-foreground md:w-[50%] my-6 ">
            <p className="text-2xl font-semibold text-foreground mb-6">
              Welcome to my portfolio!
            </p>
            <p className="mb-2">
              My name is Maciej Kozak, and I am a Frontend Developer, experienced IT specialist and
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
              Currently, I serve as a Frontend Developer, managing and developing websites using modern technologies and practices.{" "}
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
              problem-solving. My technical skills include HTML, JavaScript, Typescript, CSS,
              React, Next.js and Git. I am fluent in English, which enables
              effective international collaboration.{" "}
            </p>
            <p className="mb-2">
              I warmly invite you to contact me and explore potential
              collaborations!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WelcomePage;
