const WelcomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-6 flex flex-col gap-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="bg-secondary md:w-[50%] h-[800px]"></div>
          <div className=" md:w-[50%]">
            <p className="text-2xl font-semibold text-foreground">
              Welcome to my portfolio!
            </p>
            <p>
              My name is Maciej and I am an aspiring future Javascript/React
              Developer looking for my first job.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
